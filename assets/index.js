var app = document.getElementById("app")

app.innerHTML = `<div>
                    <div class="loader"></div>
                </div>

                <main class="flex-grow md:flex">
                    <div class="absolute p-16 inset-0 flex items-center">
                        <div class="navbar py-2 px-3">
                            <a id="theme-button" class="navbar-item rounded-full mr-1 social-button-color"><i class="fab fa-bitcoin"></i></a>
                            <a class="navbar-item rounded mr-1 social-button-color" href="https://steamcommunity.com/id/LaLa1424/" target="_blank"><i class="fab fa-steam"></i></a>
                        </div>
                        <div class="w-full text-left">
                            <div class="font-bold text-3xl main-text-color">LaLa's Justıce#1424</div>
                            <div class="font-normal text-x1 description-color">
                               I'm LaLa, developer, designer & gamer. Based in Turkey.
                            </div>
                            <div class="mt-2 mr-10 font-semibold text-sm">
                                <a href="https://github.com/LaLa1424" target="_blank" class="mt-2 mr-4 inline-block social-button-color social-button">
                                    <i class="fab fa-github mr-1"></i>LaLa1424
                                </a>
                                <a href="https://discord.com/users/302494505578397696" target="_blank" class="mt-2 mr-4 inline-block social-button-color social-button">
                                    <i class="fab fa-discord mr-1"></i>LaLa's Justıce#1424
                                </a>
                                <a href="https://open.spotify.com/user/egemensen14-tr?si=b72c4515c8754966" target="_blank" class="mt-2 mr-4 inline-block social-button-color social-button">
                                    <i class="fab fa-spotify mr-1"></i>Egemen Şen
                                </a>
                            </div>
                            <div id="statusContent" class="mt-2 mr-10 font-semibold text-sm rounded-md">
                                <div id="discordContent" class="font-bold text-x1 description-color"></div>
                                <div id="spotifyContent" class="font-bold text-x1 description-color"></div>
                            </div>
                        </div>
                    </div>
                </main>
                `

$(window).on("load",function(){
    $(".loader").fadeOut("slow");
});

//app.innerHTML = ``

var themeButton = document.getElementById("theme-button")
themeButton.onclick = function(){
    alert("Theme switching is temporarily disabled.");
}