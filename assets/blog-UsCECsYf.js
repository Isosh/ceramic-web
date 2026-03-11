import"./script-DZ_rZEzv.js";const n="https://ceramic-api.onrender.com";async function l(){const e=`${n}/api/posts`;return(await fetch(e,{headers:{Accept:"application/json"}})).json()}function a(e){const o=document.querySelector(".blog_feed-container");o&&(o.innerHTML="",e.forEach(t=>{o.insertAdjacentHTML("beforeend",`
            <div class="blog_feed__element">
                <div class="blog_feed__element__header">

                    <img src="${n}${t.image}" 
                         alt="${t.title}" 
                         class="blog_feed__element__header-im" />

                    <div class="blog_feed__element__header-title_block">
                        <h2 class="title-h2 blog_feed__element__header-title_block-title">
                          ${t.title}
                        </h2>

                        <button class="default-button blog_feed__element__header-title_block__button" 
                                data-post-id="${t.id}">
                          read
                        </button>
                    </div>

                </div>

                <p class="paragraph blog_feed__element-text">
                    ${t.excerpt??""}
                </p>
            </div>
        `)}))}async function s(){try{const e=await l();a(e)}catch(e){console.error("Ошибка загрузки постов:",e)}}s();
