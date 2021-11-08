(()=>{"use strict";const t=function(t,n,e){var a=jQuery(t);a.attr("aria-describedby",e);var r=a.parent().find(n);(r=r.length?r:a.parent().parent().find(n)).attr("id",e)};jQuery((function(n){for(var e=0,a=["part_label","chapter_label","enable_source_comparison","pdf_body_font_size","pdf_page_margin_outside","pdf_page_margin_inside","pdf_page_margin_top","pdf_page_margin_bottom","ebook_start_point"];e<a.length;e++){var r=a[e];t("#"+r,"p[class=description]",r+"_description")}n(".select2").select2(),n(".color-picker").wpColorPicker();var i=n("#chapter_numbers");n(document).ready((function(){i.is(":checked")?n("#part_label, #chapter_label").parent().parent().show():n("#part_label, #chapter_label").parent().parent().hide(),i.on("change",(function(){this.checked?n("#part_label, #chapter_label").parent().parent().show():n("#part_label, #chapter_label").parent().parent().hide()})),"10"!==n("#pdf_page_size").val()&&n("#pdf_page_width, #pdf_page_height").parent().parent().hide();var t=n("input#running_content_front_matter_left_custom");t.attr("aria-labelledby","running_content_front_matter_left"),n("select#running_content_front_matter_left").on("change",(function(){var e=n(this).val();t.val(e),""===e&&t.trigger("focus").val("")}));var e=n("input#running_content_front_matter_right_custom");e.attr("aria-labelledby","running_content_front_matter_right"),n("select#running_content_front_matter_right").on("change",(function(){var t=n(this).val();e.val(t),""===t&&e.trigger("focus").val("")}));var a=n("input#running_content_introduction_left_custom");a.attr("aria-labelledby","running_content_introduction_left"),n("select#running_content_introduction_left").on("change",(function(){var t=n(this).val();a.val(t),""===t&&a.trigger("focus").val("")}));var r=n("input#running_content_introduction_right_custom");r.attr("aria-labelledby","running_content_introduction_right"),n("select#running_content_introduction_right").on("change",(function(){var t=n(this).val();r.val(t),""===t&&r.trigger("focus").val("")}));var _=n("input#running_content_part_left_custom");_.attr("aria-labelledby","running_content_part_left"),n("select#running_content_part_left").on("change",(function(){var t=n(this).val();_.val(t),""===t&&_.trigger("focus").val("")}));var p=n("input#running_content_part_right_custom");p.attr("aria-labelledby","running_content_part_right"),n("select#running_content_part_right").on("change",(function(){var t=n(this).val();p.val(t),""===t&&p.trigger("focus").val("")}));var c=n("input#running_content_chapter_left_custom");c.attr("aria-labelledby","running_content_chapter_left"),n("select#running_content_chapter_left").on("change",(function(){var t=n(this).val();c.val(t),""===t&&c.trigger("focus").val("")}));var l=n("input#running_content_chapter_right_custom");l.attr("aria-labelledby","running_content_chapter_right"),n("select#running_content_chapter_right").on("change",(function(){var t=n(this).val();l.val(t),""===t&&l.trigger("focus").val("")}));var g=n("input#running_content_back_matter_left_custom");g.attr("aria-labelledby","running_content_back_matter_left"),n("select#running_content_back_matter_left").on("change",(function(){var t=n(this).val();g.val(t),""===t&&g.trigger("focus").val("")}));var o=n("input#running_content_back_matter_right_custom");o.attr("aria-labelledby","running_content_back_matter_right"),n("select#running_content_back_matter_right").on("change",(function(){var t=n(this).val();o.val(t),""===t&&o.trigger("focus").val("")})),n("#pdf_page_size").on("change",(function(){switch(n("#pdf_page_size").val()){case"1":n("#pdf_page_width").val("5.5in").parent().parent().hide(),n("#pdf_page_height").val("8.5in").parent().parent().hide();break;case"2":n("#pdf_page_width").val("6in").parent().parent().hide(),n("#pdf_page_height").val("9in").parent().parent().hide();break;case"3":n("#pdf_page_width").val("8.5in").parent().parent().hide(),n("#pdf_page_height").val("11in").parent().parent().hide();break;case"4":n("#pdf_page_width").val("8.5in").parent().parent().hide(),n("#pdf_page_height").val("9.25in").parent().parent().hide();break;case"5":n("#pdf_page_width").val("5in").parent().parent().hide(),n("#pdf_page_height").val("7.75in").parent().parent().hide();break;case"6":n("#pdf_page_width").val("4.25in").parent().parent().hide(),n("#pdf_page_height").val("7in").parent().parent().hide();break;case"7":n("#pdf_page_width").val("21cm").parent().parent().hide(),n("#pdf_page_height").val("29.7cm").parent().parent().hide();break;case"8":n("#pdf_page_width").val("14.8cm").parent().parent().hide(),n("#pdf_page_height").val("21cm").parent().parent().hide();break;case"9":n("#pdf_page_width").val("5in").parent().parent().hide(),n("#pdf_page_height").val("8in").parent().parent().hide();break;case"10":n("#pdf_page_width").val("").parent().parent().fadeToggle(),n("#pdf_page_height").val("").parent().parent().fadeToggle();break;default:n("#pdf_page_width").val("5.5in").parent().parent().hide(),n("#pdf_page_height").val("8.5in").parent().parent().hide()}}))}))}))})();