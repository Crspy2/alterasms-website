<template>
<article class="hidden lg:flex flex-col wrapper">
  <h2 class="text-5xl font-bold uppercase text-center mb-12 text-white font-warp">Some Services We Provide</h2>
  <div class="marquee">
    <div class="marquee__group">
      <img src="/services/blizzard.png" class="image"/>
      <img src="/services/coinbase.png" class="image"/>
      <img src="/services/firebase.png" class="image"/>
      <img src="/services/g2g.png" class="image"/>
      <img src="/services/openAI.png" class="image"/>
      <img src="/services/riot.jpg" class="image"/>
      <img src="/services/roblox.png" class="image"/>
      <img src="/services/skrill.png" class="image"/>
      <img src="/services/steam.png" class="image"/>
      <img src="/services/ubisoft.png" class="image"/>
    </div>

    <div aria-hidden="true" class="marquee__group">
      <img src="/services/blizzard.png" class="image"/>
      <img src="/services/coinbase.png" class="image"/>
      <img src="/services/firebase.png" class="image"/>
      <img src="/services/g2g.png" class="image"/>
      <img src="/services/openAI.png" class="image"/>
      <img src="/services/riot.jpg" class="image"/>
      <img src="/services/roblox.png" class="image"/>
      <img src="/services/skrill.png" class="image"/>
      <img src="/services/steam.png" class="image"/>
      <img src="/services/ubisoft.png" class="image"/>
    </div>
  </div>

  <div class="marquee marquee--reverse">
    <div class="marquee__group">
      <img src="/services/cashapp.png" class="image"/>
      <img src="/services/ea.png" class="image"/>
      <img src="/services/discord.png" class="image"/>
      <img src="/services/paypal.png" class="image"/>
      <img src="/services/spotify.png" class="image"/>
      <img src="/services/square.png" class="image"/>
      <img src="/services/stripe.png" class="image"/>
      <img src="/services/xbox.png" class="image"/>
      <img src="/services/Venmo.png" class="image"/>
      <img src="/services/zelle.png" class="image"/>
    </div>

    <div aria-hidden="true" class="marquee__group">
      <img src="/services/cashapp.png" class="image"/>
      <img src="/services/ea.png" class="image"/>
      <img src="/services/discord.png" class="image"/>
      <img src="/services/paypal.png" class="image"/>
      <img src="/services/spotify.png" class="image"/>
      <img src="/services/square.png" class="image"/>
      <img src="/services/stripe.png" class="image"/>
      <img src="/services/xbox.png" class="image"/>
      <img src="/services/Venmo.png" class="image"/>
      <img src="/services/zelle.png" class="image"/>
    </div>
  </div>
</article>

</template>

<style scoped>

* {
  box-sizing: border-box;
}

.marquee {
  display: flex;
  overflow: hidden;
  user-select: none;
  gap: calc(clamp(10rem, 1rem + 40vmin, 30rem) / 14);
  mask-image: linear-gradient(
    var(--mask-direction, to right),
    hsl(0 0% 0% / 0),
    hsl(0 0% 0% / 1) 20%,
    hsl(0 0% 0% / 1) 80%,
    hsl(0 0% 0% / 0)
  );
}

.marquee__group {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  gap: calc(clamp(10rem, 1rem + 40vmin, 30rem) / 14);
  min-width: 100%;
  animation: scroll-x 30s linear infinite;
}

.marquee__group > .image {
    height: 100px;
    width: 100px;
    background-color: rgb(39 39 42);
    border-radius: 30px;
}

@media (prefers-reduced-motion: reduce) {
  .marquee__group {
    animation-play-state: paused;
  }
}

.marquee--reverse .marquee__group {
  animation-direction: reverse;
  animation-delay: -3s;
}

@keyframes scroll-x {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(calc(-100% - calc(clamp(10rem, 1rem + 40vmin, 30rem) / 14)));
  }
}

@keyframes scroll-y {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(calc(-100% - calc(clamp(10rem, 1rem + 40vmin, 30rem) / 14)));
  }
}

/* Parent wrapper */
.wrapper {
  padding-top: 7rem;
  gap: calc(clamp(10rem, 1rem + 40vmin, 30rem) / 14);
  margin: auto;
  max-width: 72rem;
}
</style>