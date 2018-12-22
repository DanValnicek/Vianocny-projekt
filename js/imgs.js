let imgsCount = {
    "anglicko":76
}


let generateImages = (pageName)=> {
    let imgsNumberInsertString = "";
    for (i = 1; i < imgsCount[pageName]; i++) {
        imgsNumberInsertString+=`
            <div class="grid-item item animate-box" data-animate-effect="fadeIn">
                    <a href="images/${pageName}/${i}.jpg" class="image-popup" title="Name of photo or title here">
                    <div class="img-wrap">
                        <img src="images/${pageName}/${i}.jpg" alt="" class="img-responsive">
                    </div>
                    <div class="text-wrap">
                        <div class="text-inner popup">
                            <div>
                                <h2>Name of photo or title here</h2>
                            </div>
                        </div>
                    </div>
                </a>
              </div>
        `
    }
    $("#imgs-number-insert-wrapper").html(imgsNumberInsertString);
}