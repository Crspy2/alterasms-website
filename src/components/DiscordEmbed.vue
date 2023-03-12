<template>
    <div class="tilting-card-wrapper select-text lg:select-none">
        <div class="mouse-position-tracker"></div>
        <div class="mouse-position-tracker"></div>
        <div class="mouse-position-tracker"></div>
        <div class="mouse-position-tracker"></div>
        <div class="mouse-position-tracker"></div>
        <div class="mouse-position-tracker"></div>
        <div class="mouse-position-tracker"></div>
        <div class="mouse-position-tracker"></div>
        <div class="mouse-position-tracker"></div>
        <div class="tilting-card-body">
            <div class="w-[300px] md:w-[400px] h-auto py-2 md:py-4 pl-2 md:pl-4 pr-5 md:pr-2 rounded inline-block bg-zinc-800 text-left">
                <h2 class="text-base font-discord font-semibold mb-1 text-white">SMS Number Generated</h2>
                <div class="flex flex-row">
                    <img src="../assets/info.png" class="w-[18px] h-[18px]"/>
                    <p class="ml-1 text-zinc-300 text-[13px] font-discord hidden md:block">You will only be charged once a text message is received</p>
                    <div class="flex-cols block md:hidden">
                        <p class="ml-1 text-zinc-300 text-[13px] font-discord">You will only be charged once a text</p>
                        <p class="text-zinc-300 text-[13px] font-discord -ml-4">message is received</p>
                    </div>

                </div>
                <div class="md:bg-zinc-900 rounded mr-6 h-8 mt-1.5">
                    <p class="text-xs md:text-sm text-zinc-300 md:text-blue-300 md:font-discordCode ml-2.5 pt-1.5">447405754987</p>
                </div>
                <div class="flex flex-col md:gap-y-3">
                    <div class="flex flex-col md:flex-row justify-between max-w-[89%] mt-2">
                        <div>
                            <h3 class="text-white text-[13px] font-semibold">Service:</h3>
                            <p class="text-zinc-300 text-[13px]">Ubisoft</p>
                        </div>
                        <div>
                            <h3 class="text-white text-[13px] font-semibold">Message Rate:</h3>
                            <p class="text-zinc-300 text-[13px] md:text-[11px] md:font-discordCode md:bg-zinc-900 pl-[2px] w-[38px] rounded">$1.00</p>
                        </div>
                        <div>
                            <h3 class="text-white text-[13px] font-semibold">Country:</h3>
                            <p class="text-zinc-300 text-[13px]">UK</p>
                        </div>
                    </div>
                    <div class="flex flex-col md:flex-row justify-between max-w-[67%]">
                        <div>
                            <h3 class="text-white text-[13px] font-semibold">Number:</h3>
                            <p class="text-zinc-300 text-[13px]">+44 7405 754987</p>
                        </div>
                        <div>
                            <h3 class="text-white text-[13px] font-semibold">Balance:</h3>
                            <p class="text-zinc-300 text-[13px] md:text-[11px] md:font-discordCode md:bg-zinc-900 pl-[2px] w-[38px] rounded">$1.57</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
@media (min-width: 768px) {
.tilting-card-body {
  display: grid;
  place-content: center;
  text-align: center;
  box-shadow: var(--shadow);
}

.mouse-position-tracker {
  position: absolute;
  width: calc(100% / 3);
  height: calc(100% / 3);
  z-index: 2;
}

/* 1st, 4th, 7th */
.mouse-position-tracker:nth-child(3n - 2) {
  left: 0;
}
/* 2nd, 5th, 8th */
.mouse-position-tracker:nth-child(3n - 1) {
  left: calc(100% / 3);
}

/* 2nd, 5th, 8th */
.mouse-position-tracker:nth-child(3n) {
  right: 0;
}

/* 4 to 6 */
.mouse-position-tracker:nth-child(n + 4):nth-child(-n + 6) {
  top: calc(100% / 3);
}
/* 7 to 9 */
.mouse-position-tracker:nth-child(n + 7):nth-child(-n + 9) {
  bottom: 0;
}

.tilting-card-wrapper {
  position: relative;
  width: 400px;
  height: 216px;
  aspect-ratio: 1 / 2;
}

.tilting-card-body {
  position: absolute;
  inset: 0;
  background-position: center;
}

.tilting-card-body > :where(h1, p) {
  background: white;
  padding: 0.2rem;
  margin: 0;
}

.tilting-card-body {
  --perspective: 500px;
  --rotationX: 0;
  --rotationY: 0;
  --rotationZ: 0;
  --angle: 15deg;
  transform: perspective(var(--perspective)) rotateX(var(--rotationX))
    rotateY(var(--rotationY)) rotateZ(var(--rotationZ));
  transition: transform 500ms ease;
}

.mouse-position-tracker:nth-child(1):hover ~ .tilting-card-body {
  --rotationX: var(--angle);
  --rotationY: calc(var(--angle) * -1);
}

.mouse-position-tracker:nth-child(2):hover ~ .tilting-card-body {
  --rotationX: var(--angle);
}

.mouse-position-tracker:nth-child(3):hover ~ .tilting-card-body {
  --rotationX: var(--angle);
  --rotationY: var(--angle);
}

.mouse-position-tracker:nth-child(4):hover ~ .tilting-card-body {
  --rotationY: calc(var(--angle) * -1);
}

.mouse-position-tracker:nth-child(6):hover ~ .tilting-card-body {
  --rotationY: var(--angle);
}

.mouse-position-tracker:nth-child(7):hover ~ .tilting-card-body {
  --rotationY: calc(var(--angle) * -1);
  --rotationX: calc(var(--angle) * -1);
}

.mouse-position-tracker:nth-child(8):hover ~ .tilting-card-body {
  --rotationX: calc(var(--angle) * -1);
}

.mouse-position-tracker:nth-child(9):hover ~ .tilting-card-body {
  --rotationY: var(--angle);
  --rotationX: calc(var(--angle) * -1);
}

/* general styling */
:root {
  --shadow: 0px 1px 2.2px rgba(0, 0, 0, 0.02),
    0px 2.5px 5.3px rgba(0, 0, 0, 0.028), 0px 4.6px 10px rgba(0, 0, 0, 0.035),
    0px 8.3px 17.9px rgba(0, 0, 0, 0.042), 0px 15.5px 33.4px rgba(0, 0, 0, 0.05),
    0px 37px 80px rgba(0, 0, 0, 0.07);
}

body {
  display: grid;
  place-content: center;
}
}
</style>
