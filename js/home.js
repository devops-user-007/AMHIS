$(document).ready(function() {
                        $("#lnk_home").click(function(){
                            $('html, body').animate({
                                scrollTop: $("#main-container").offset().top
                            }, 2000);
                        });

                        $("#lnk_whoarewe").click(function(){
                            $('html, body').animate({
                                scrollTop: $("#whoarewe-container").offset().top
                            }, 2000);
                        });

                        $("#lnk_projectgallery").click(function(){
                            $('html, body').animate({
                                scrollTop: $("#projectgallery-container").offset().top
                            }, 2000);
                        });

                        $("#lnk_reviews").click(function(){
                            $('html, body').animate({
                                scrollTop: $("#review-container").offset().top
                            }, 2000);
                        });

                        $("#lnk_contact").click(function(){
                            $('html, body').animate({
                                scrollTop: $("#contactus-container").offset().top
                            }, 2000);
                        });

                        $("#lnk_whoarewe_scroll").click(function(){
                            alert("test");
                            $('html, body').animate({
                                scrollTop: $("#whoarewe-container").offset().top
                            }, 2000);
                        });
});