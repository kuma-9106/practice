<template id="app">
  <div class="wrapper">
    <div class="d-flex">
      <HomeData
        id="topPage-homeData"
        tag="div"
        data-imp-card="homeData"
        data-ct-card="homeData"
        data-send-type="withDisplayOrder"
      />
      <CardPoint
        id="topPage-cardPoint"
        tag="div"
        data-imp-card="cardPoint"
        data-ct-card="cardPoint"
        data-send-type="withDisplayOrder"
      />
      <UsageFee
        id="topPage-usageFee"
        tag="div"
        data-imp-card="usageFee"
        data-ct-card="usageFee"
        data-send-type="withDisplayOrder"
      />
    </div>
    <MemberBenefit
      id="topPage-usageFee"
      tag="div"
      data-imp-card="memberBenefit"
      data-ct-card="usageFee"
      data-send-type="withDisplayOrder"
      class="mt-2"
    />

    <div class="dummy-content border mt-2">ダミーコンテンツ</div>
    <div class="d-flex mt-2">
      <div class="dummy-content border">ダミーコンテンツ</div>
      <div class="dummy-content border">ダミーコンテンツ</div>
      <div class="dummy-content border">ダミーコンテンツ</div>
    </div>
    <div class="d-flex mt-2">
      <GasUsage
        id="topPage-gasusage"
        tag="div"
        data-imp-card="gas"
        data-ct-card="gas"
      />
      <ElectricityUsage
        id="topPage-electricityUsage"
        tag="div"
        data-imp-card="electricity"
        data-ct-card="electricity"
      />
      <InternetUsage
        id="topPage-internetUsage"
        tag="div"
        data-imp-card="internet"
        data-ct-card="internet"
      />
    </div>
  </div>
</template>

<script setup>
import CardPoint from "./components/cardPoint.vue";
import HomeData from "./components/homeData.vue";
import UsageFee from "./components/usageFee.vue";
import MemberBenefit from "./components/memberBenefit.vue";
import GasUsage from "./components/gasUsage.vue";
import ElectricityUsage from "./components/electricityUsage.vue";
import InternetUsage from "./components/internetUsage.vue";
import { onMounted, onBeforeUnmount } from "vue";

const orders = {
  homeData: 1,
  cardPoint: 2,
  usageFee: 3,
};
const billPlanCode = "A00001";
const sendImpCardSet = new Set();
const sendCtCardSet = new Set();
let isScrollHandling = false;

/**
各カードインプレッションGA送信
*/
const sendGaCardImpression = (impressionCardId, hasDisplayOrder) => {
  const label = buildImpCtCardLabel(
    impressionCardId,
    hasDisplayOrder,
    billPlanCode,
  );

  console.log("IMP送信" + label);
};

/**
 *各カードクリック時のGA送信
 */
const sendGaCardClick = (ctCardId, hasDisplayOrder, ctClickedElementId) => {
  const label = buildImpCtCardLabel(
    ctCardId,
    hasDisplayOrder,
    billPlanCode,
    ctClickedElementId,
  );
  console.log("CT送信" + label);
};

// カード表示順をIMP/CT送信用ラベルに成形

const formatImpCtCardOrderLabel = () => {
  const cardOrderEntries = Object.entries(orders);

  return cardOrderEntries
    .sort(([, a], [, b]) => Number(a) - Number(b))
    .map(([key]) => key)
    .join("_");
};

// 各カードのIMP/CT送信用ラベル作成
const buildImpCtCardLabel = (
  cardId,
  hasDisplayOrder,
  billPlanCode,
  ctClickedElementId,
) => {
  if (!hasDisplayOrder) return cardId;
  const catdorder = formatImpCtCardOrderLabel();
  const label =
    cardId + "_" + billPlanCode + "_" + catdorder + "_maxchoicecard";
  return ctClickedElementId ? label + "_" + ctClickedElementId : label;
};

// 各カードタイトル領域がIMP送信対象の位置に到達しているかの判定
const isCardVisible = (rect) => {
  const isPortrait = window.innerHeight > window.innerWidth;
  if (isPortrait) {
    const centralZoneTop =
      window.innerHeight / 2 - (window.innerWidth / 2) * 0.375;
    return rect.bottom <= centralZoneTop;
  }
  return rect.top < window.innerHeight && rect.bottom > 0;
};

//  各カードタイトル領域が画面中央部分より上部に遷移したかの判定
// impressionCardTitle: 対象タイトル要素
const checkTitleVisibility = (impressionCardTitle) => {
  const impressionCard = impressionCardTitle.closest("[data-imp-card]");

  if (!impressionCard) return;
  const impressionCardId = impressionCard.dataset.impCard;
  const hasDisplayOrder =
    impressionCard.dataset.sendType === "withDisplayOrder";
  if (!impressionCardId || sendImpCardSet.has(impressionCardId)) return;
  const impressionCardTitleRect = impressionCardTitle.getBoundingClientRect();
  if (!isCardVisible(impressionCardTitleRect)) return;
  sendImpCardSet.add(impressionCardId);
  sendGaCardImpression(impressionCardId, hasDisplayOrder);
};

// IMP送信対象のカードタイトルのチェック
const checkImpressionTarget = () => {
  const impressionCards = document.querySelectorAll("[data-imp-card]");
  impressionCards.forEach((impressionCard) => {
    const impressionCardId = impressionCard.dataset.impCard;
    if (!impressionCardId || sendImpCardSet.has(impressionCardId)) return;
    const impressionCardTitle = impressionCard.querySelector(
      '[id$="-headingBasic-1"]',
    );
    if (!impressionCardTitle) return;
    checkTitleVisibility(impressionCardTitle);
  });
};

// スクロール最適化

const onScroll = () => {
  if (isScrollHandling) return;
  isScrollHandling = true;
  requestAnimationFrame(() => {
    checkImpressionTarget();
    isScrollHandling = false;
  });
};

// resize処理
const handleResize = () => {
  checkImpressionTarget();
};

const handleCtClick = (e) => {
  if (!(e.target instanceof HTMLElement)) return;
  const ctClickedElement = e.target.closest("button, a");
  if (!ctClickedElement) return;

  const ctClickedElementId = ctClickedElement.id;
  // クリックされた要素のidがないもの、啓発リンク、ツールチップは除外

  if (
    !ctClickedElementId ||
    ctClickedElementId.startsWith("recommend-flexible") ||
    ctClickedElementId.includes("buttonQuestion")
  )
    return;

  const ctCard = ctClickedElement.closest("[data-ct-card]");

  if (!(ctCard instanceof HTMLElement)) return;
  const ctCardId = ctCard.dataset.ctCard;
  const hasDisplayOrder = ctCard.dataset.sendType === "withDisplayOrder";
  if (!ctCardId || sendCtCardSet.has(ctClickedElementId)) return;
  sendCtCardSet.add(ctClickedElementId);
  sendGaCardClick(ctCardId, hasDisplayOrder, ctClickedElementId);
};

onMounted(() => {
  checkImpressionTarget();
  window.addEventListener("resize", handleResize);
  window.addEventListener("scroll", onScroll);
  window.addEventListener("click", handleCtClick);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", onScroll);
  window.removeEventListener("resize", handleResize);
  document.removeEventListener("click", handleCtClick);
});
</script>

<style>
.wrapper {
  max-width: 800px;
  margin: 50px auto;
}

.d-flex {
  display: flex;
  justify-content: space-between;
}

.d-block {
  display: block;
}

.border {
  border: solid 1px #000080;
}

.p-2 {
  padding: 16px;
}

.mt-2 {
  margin-top: 16px;
}

.dummy-content {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 300px;
}
</style>
