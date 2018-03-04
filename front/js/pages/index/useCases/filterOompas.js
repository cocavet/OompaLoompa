import $ from 'zepto';

const OOMPA_SELECTOR = '.oompa';

let filterOompas = {
    init(selector) {
        let that = this;
        
        $(selector).on('keyup', function() {
            let filterText = $(this).val();
            
            that.filter(filterText);
        });
    },

    filter(str) {
        $(OOMPA_SELECTOR).each(function(){
            let infoOompa = {
                profession: $(this).data('profession'),
                nameOompa: $(this).data('name'),
                str: str
            }
  
            if(containsWordInProfession(infoOompa) || containsWordInName(infoOompa)) {
                $(this).show();
            }else {
                $(this).hide();
            }
        })
    }
}

function containsWordInProfession(infoOompa) {
    return infoOompa.profession.toLowerCase().indexOf(infoOompa.str) >= 0 
        || infoOompa.profession.indexOf(infoOompa.str) >= 0 ;
}

function containsWordInName(infoOompa) {
    return infoOompa.nameOompa.toLowerCase().indexOf(infoOompa.str) >= 0 ||infoOompa.nameOompa.toLowerCase().indexOf(infoOompa.str) >= 0;
}

export {
    filterOompas
}