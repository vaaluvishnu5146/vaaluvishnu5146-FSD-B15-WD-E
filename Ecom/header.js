(function () {
    if (document && document.body) {
        const headerElement = document.createElement('header');
        headerElement.setAttribute("id", "header");
        headerElement.setAttribute("class", "px-5 md:px-10 lg:px-20 py-5 header border mb-10 bg-white");

        // Render all other elements
        headerElement.innerHTML = `
    <div id="head" class="flex head md:mb-5">
            <div class="w-1/3 md:w-1/4">
                <a href="./index.html">
                    <h1 class="text-2xl font-bold text-gray-950">BR.<span class="text-gray-300">F</span></h1>
                </a>
            </div>
            <div class="w-2/4 hidden md:flex md: justify-center">
                <div class="flex search-input">
                    <img class="w-10 p-3" src="./assets/search.png" />
                    <input class="w-full bg-transparent" placeholder="Search" />
                </div>
            </div>
            <div class="flex gap-x-5 items-center justify-end w-2/3 md:w-1/4 ">
                <div class="flex flex-col items-center md:hidden">
                    <img class="w-5" src="./assets/search.png" />
                    <p class="text-sm font-bold hidden md:block">Search</p>
                </div>
                <a href="./cart.html">
                <div class="flex flex-col items-center">
                    <img class="w-5" src="./assets/shoppingbag.png" />
                    <p class="text-sm font-bold hidden md:block">Cart</p>
                </div>
                </a>
                <div class="flex flex-col items-center">
                    <img class="w-5" src="./assets/favourite.png" />
                    <p class="text-sm font-bold hidden md:block">Favourites</p>
                </div>
                <div class="hidden md:block">
                    <img class="w-12 rounded-full" src="./assets/pofileimage.webp" />
                </div>
                <div class="flex flex-col items-center md:hidden">
                    <img class="w-5" src="./assets/burger.svg" />
                    <p class="text-sm font-bold hidden md:block">Search</p>
                </div>
            </div>
        </div>
        <div id="nav" class="hidden md:block nav">
            <ul class="flex w-full gap-x-5 overflow-x-scroll">
                <li>
                    <a class="font-semibold hover:text-red-600" href="#">Women</a></li>
                <li><a class="font-semibold hover:text-red-600" href="#">Men</a></li>
                <li><a class="font-semibold hover:text-red-600" href="#">Kids</a></li>
                <li><a class="font-semibold hover:text-red-600" href="#">Sports</a></li>
                <li><a class="font-semibold hover:text-red-600" href="#">Brands</a></li>
                <li><a class="font-semibold hover:text-red-600" href="#">New</a></li>
                <li><a class="font-semibold hover:text-red-600" href="#">Sale</a></li>
            </ul>
        </div>
    `;
        document
            .body
            .insertAdjacentElement("afterbegin", headerElement)
    }
})();