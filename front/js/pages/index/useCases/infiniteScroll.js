import $ from 'zepto';

let PAGE_NUMBER = 1;
const WINDOW = window;
const URL = "/page/" + PAGE_NUMBER;
const OOMPAS_LIST_SELECTOR = '#oompasList';

let infiniteScroll = {
    init() {
        $(WINDOW).on('scroll', () => {
            if($(WINDOW).scrollTop() + $(WINDOW).height() == $(document).height()) {
                this.loadMoreData();
            }
        });
    }, 

    loadMoreData() {
        let xmlhttp = new XMLHttpRequest();

        xmlhttp.open("GET", URL, true);
        xmlhttp.onreadystatechange = function(){
            if (xmlhttp.readyState==4 && xmlhttp.status==200){
                let response = xmlhttp.responseText;
                $(OOMPAS_LIST_SELECTOR).append(response);
                PAGE_NUMBER++;
            }
        }
        xmlhttp.send();
    }
}

export {
    infiniteScroll 
}