(()=>{"use strict";const e=function(e,a,t){var i=jQuery(e);i.attr("aria-describedby",t);var _=i.parent().find(a);(_=_.length?_:i.parent().parent().find(a)).attr("id",t)};jQuery(document).ready((function(a){for(var t=0,i=["pb_short_title","pb_publisher","pb_publisher_city","pb_publication_date","pb_onsale_date","pb_ebook_isbn","pb_print_isbn","pb_language","pb_cover_image","primary-subject","additional-subjects","pb_is_based_on","pb_copyright_year","pb_copyright_holder","pb_book_license","pb_about_140","pb_about_50","pb_series_title","pb_series_number","pb_keywords_tags","pb_hashtag","pb_list_price_print","pb_list_price_pdf","pb_list_price_epub","pb_list_price_web","pb_audience","pb_bisac_subject","pb_bisac_regional_theme"];t<i.length;t++){var _=i[t];e("#".concat(_),"span[class=description]","".concat(_,"_description"))}a("#pb_title").trigger("focus"),a("#primary-subject").select2({placeholder:PB_BookInfoToken.selectSubjectText,allowClear:!0,width:"400px",ajax:{url:PB_BookInfoToken.ajaxUrl+(PB_BookInfoToken.ajaxUrl.includes("?")?"&":"?")+"includeQualifiers=0",dataType:"json",delay:250}}),a("#additional-subjects").select2({placeholder:PB_BookInfoToken.selectSubjectsText,allowClear:!0,width:"100%",minimumInputLength:2,ajax:{url:PB_BookInfoToken.ajaxUrl+(PB_BookInfoToken.ajaxUrl.includes("?")?"&":"?")+"includeQualifiers=1",dataType:"json",delay:250}})}))})();