<script setup lang="ts">
import Cards from './Cards.vue';
</script>

<template>
    <div class="py-32 h-screen" id="features">
        <div class="text-5xl font-bold uppercase text-center mb-12 text-white font-warp">An SMS platform built on your satisfaction</div>
        <div class="w-full py-10 px-[10%] box-border ">
            <div class="clear-both p-0 m-0 zoom-1 after:clear-both after:content-[''] after:table before:content-[''] before:table">
                <div class="block box-border float-left my-[1%] mx-0 lg:my-[1%] lg:mr-0 lg:ml-[1.6%] first:ml-0 span_1_of_2">
                    <div class="text-3xl text-white font-extrabold">
                        Satisfied Customers
                    </div>
                    <div class="text-lg opacity-90 mt-2.5 font-light text-white">
                        Our staff, devs and owners are experienced in customer support and guarantee your satisfaction. We've managed to gain our reputation by keeping customers happy with our services.
                    </div>
                </div>
                <div class="block box-border float-left my-[1%] mx-0 lg:my-[1%] lg:mr-0 lg:ml-[1.6%] first:ml-0 span_1_of_2">
                    <div class="text-center select-none">
                        <div class="w-full h-auto duration-200 box-border hover:scale-[1.02] mt-30 mb-0 mx-auto">
                            <div class="shadow-bg w-[250px] h-auto p-2.5 rounded inline-block bg-zinc-800 text-left">
                                <div class="text-xl font-neon font-semibold mb-1 text-white">Reviews</div>
                                <a class="text-sm text-[#cd5073] font-neon duration-200 hover:text-[#dc3d6a]" href="https://discord.gg/wgSm3SayuR" target="_blank">
                                    See our Reviews
                                </a>
                            </div>
                            <div class="shadown-bg w-[210px] h-auto p-[10px] rounded inline-block -ml-[80px] bg-zinc-800 text-left align-[-10px]">
                                <div class="">
                                    <img class="rounded-[50%] w-[25px] inline-block shadow-profile"
                                        src="https://rdgb.net/i/Pbwny.jpg" />
                                    <img class="rounded-[50%] w-[25px] inline-block shadow-profile -ml-3"
                                        src="https://rdgb.net/i/ebWbu.jpg" />
                                    <img class="rounded-[50%] w-[25px] inline-block shadow-profile -ml-3"
                                        src="https://rdgb.net/i/uWiGK.jpeg" />
                                    <img class="rounded-[50%] w-[25px] inline-block shadow-profile -ml-3"
                                        src="https://rdgb.net/i/y4qu7.jpeg" />
                                    <img class="rounded-[50%] w-[25px] inline-block shadow-profile -ml-3"
                                        src="https://rdgb.net/i/oC8Js.jpeg" alt=" " />
                                    <img class="rounded-[50%] w-[25px] inline-block shadow-profile -ml-3"
                                        src="https://rdgb.net/i/ak2Sb.jpeg" />
                                </div>
                                <div class="text-xs text-white font-neon">Ranked <b>Outstanding</b> by customers.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-full -pt-12 -mt-12 px-[10%] box-border">
            <div class="flex flex-col lg:flex-row clear-both p-0 m-0 zoom-1 after:clear-both after:content-[''] after:table before:content-[''] before:table">
                <div class="order-2 lg:order-1 block box-border float-left mt-4 mx-0 lg:mr-0 lg:ml-[1.6%] first:ml-0 span_1_of_2">
                    <div class="select-none">
                        <div class="w-[280px] sm:w-[340px]">
                            <div class="text-left mb-2.5">
                                <div class="text-sm font-neon font-semibold text-[#cd5073] text-left">Staff</div>
                                <div class="rounded-[5px] shadow-bg p-2 text-xs font-neon w-[170px] bg-zinc-800 text-left text-white">How can we help you?</div>
                            </div>
                            <div class="text-right float-right mb-2.5">
                                <div class="text-sm font-neon font-semibold text-[#cd5073] text-left">Customer</div>
                                <div class="font-neon rounded-[5px] shadow-bg p-2 text-xs w-[170px] bg-zinc-800 text-left text-white">I can't figure out how to check my balance!</div>
                            </div>
                            <div class="text-left float-left mt-16">
                                <div class="text-sm font-neon font-semibold text-[#cd5073] text-left">Staff</div>
                                <div class="font-neon rounded-[5px] shadow-bg p-2 text-xs w-[170px] bg-zinc-800 text-left text-white">Try running the /balance command!</div>
                            </div>
                            <div class="mt-[160px] text-sm opacity-70 text-left font-neon font-semibold text-[#cd5073]"><span class="saving"><span>.</span><span>.</span><span>.</span>
                                    Staff is typing</span></div>
                            <input class="font-neon rounded p-2 text-sm w-full box-border shadow-bg bg-zinc-800 text-gray-200 text-left outline-none border-none ring-0 focus:ring-0" placeholder="Message #ticket-customer" />
                        </div>
                    </div>
                </div>
                <div class="order-1 lg:order-2 block box-border float-left my-[1%] mx-0 lg:my-[1%] lg:mr-0 lg:ml-[1.6%] first:ml-0 span_1_of_2">
                    <div class="text-3xl mt-16 font-extrabold text-white">
                        Great Support
                    </div>
                    <div class="text-lg opacity-90 mt-2.5 font-light text-white">With 24/7 availability and 
                        personalized assistance, we ensure that our customers receive the attention they need 
                        to resolve any issues they may encounter quickly and efficiently.
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="w-full top-6 py-10 px-[10%] box-border">
            <div class="flex-row hidden lg:flex clear-both p-0 m-0 zoom-1 after:clear-both after:content-[''] after:table before:content-[''] before:table">
                <div class="block box-border float-left my-[1%] mx-0 lg:my-[1%] lg:mr-0 lg:ml-[1.6%] first:ml-0 span_1_of_2">
                    <div class="text-3xl text-white font-extrabold">
                        Accepting Various Payment Methods
                    </div>
                    <div class="text-lg opacity-90 mt-2.5 font-light text-white max-w-xl">
                        To accomodate all our customer's needs, we accept payments from many popular gateways such as Stripe, PayPal, CashApp and many Cryptos.
                    </div>
                </div>
                <div class="mt-8 ml-32 animate-hover">
                    <Cards />
                </div>
            </div>
        </div>
</template>

<style scoped>
.span_1_of_2 {
    width: 49.2%
}
@media only screen and (max-width: 1000px) {
    .span_2_of_2,
    .span_1_of_2 {
        width: 100%;
    }
}
@keyframes blink {
    0% {
        opacity: .2;
    }
    20% {
        opacity: 1;
    }
    100% {
        opacity: .2;
    }
}

.saving span {
    animation-name: blink;
    animation-duration: 1.4s;
    animation-iteration-count: infinite;
    animation-fill-mode: both;
}

.saving span:nth-child(2) {
    animation-delay: .2s;
}

.saving span:nth-child(3) {
    animation-delay: .4s;
}
</style>