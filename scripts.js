$(document).ready(function () {
    var items = $('.fun-fact-text');
    var currentIndex = 0;

    function showFact(index) {
        items.hide();
        items.eq(index).fadeIn(500);
    }

    function showNextFact() {
        currentIndex = (currentIndex + 1) % items.length;
        showFact(currentIndex);
    }

    // Show the first fact immediately
    showFact(currentIndex);

    // Start the carousel
    setInterval(showNextFact, 7000);
});




$(document).ready(function () {
        // Event listener para o clique no link de "Contactos"
        $('a[href="#contactos"]').click(function (e) {
            e.preventDefault(); // Impede o comportamento padrão do link

            // Obtém a posição da seção de "Contactos"
            var contactosSectionPosition = $('#contactos-section').offset().top;

            // Rola suavemente até a posição da seção de "Contactos"
            $('html, body').animate({
                scrollTop: contactosSectionPosition
            }, 1000); // Ajuste a duração conforme necessário
        });
    });




// scroll-to-top.js
document.addEventListener("DOMContentLoaded", function () {
    var scrollToTopButton = document.getElementById("scrollToTopButton");

    if (scrollToTopButton) {
        scrollToTopButton.addEventListener("click", function () {
            var sobreNosSection = document.getElementById("sobre-nos-section");

            if (sobreNosSection) {
                var sobreNosSectionPosition = sobreNosSection.getBoundingClientRect().top;
                var scrollPosition = sobreNosSectionPosition + window.scrollY + 700;
                window.scrollTo({ top: scrollPosition, behavior: "smooth" });
            }
        });
    }
});







// product-links-hover.js
document.addEventListener("DOMContentLoaded", function () {
    var productLinks = document.querySelectorAll(".product-link");

    productLinks.forEach(function (link) {
        link.addEventListener("mouseover", function () {
            var overlay = link.querySelector(".overlay");
            if (overlay) {
                overlay.style.opacity = "1";
            }
        });

        link.addEventListener("mouseout", function () {
            var overlay = link.querySelector(".overlay");
            if (overlay) {
                overlay.style.opacity = "0";
            }
        });
    });
});







// marketing-checkbox.js
document.addEventListener("DOMContentLoaded", function () {
    var checkbox = document.getElementById("marketingCheckbox");
    var confirmationText = document.getElementById("confirmationText");

    if (checkbox && confirmationText) {
        checkbox.addEventListener("change", function () {
            confirmationText.style.display = checkbox.checked ? "block" : "none";
        });
    }
});





// enhanced-product-links.js
document.addEventListener("DOMContentLoaded", function () {
    var productLinks = document.querySelectorAll(".product-link");

    productLinks.forEach(function (link) {
        var overlay = document.createElement("div");
        overlay.className = "overlay";

        var hoverImage = document.createElement("img");
        var hoverImagePath = link.getAttribute("data-hover-image");

        if (hoverImagePath) {
            hoverImage.src = hoverImagePath;
            hoverImage.alt = "Hover Image";
            overlay.appendChild(hoverImage);
            link.appendChild(overlay);

            link.addEventListener("mouseover", function () {
                overlay.style.opacity = "1";
            });

            link.addEventListener("mouseout", function () {
                overlay.style.opacity = "0";
            });

            link.addEventListener("click", function () {
                var destination = link.getAttribute("data-href");
                if (destination) {
                    window.location.href = destination;
                }
            });
        }
    });
});






$(document).ready(function () {
    // Store the original image source
    var originalImageSrc = $('#main-image').attr('src');

    // When the mouse passes over a thumbnail
    $('.thumbnail').hover(
        function () {
            var newImageSrc = $(this).attr('src');
            $('#main-image').attr('src', newImageSrc);
        },
        function () {
            // Mouseout event - revert to the original image
            $('#main-image').attr('src', originalImageSrc);
        }
    );
});



$(document).ready(function () {
    // ... Your existing code ...

    // Event listener for "Adicionar ao carrinho" button
    $('.add-to-cart-button').click(function () {
        // Get the selected size
        var selectedSize = $('#size').val();

        // Add your logic here for adding the product to the cart with the selected size
        alert("Product added to cart! Size: " + selectedSize);
    });
});







$(document).ready(function () {
    // ... Your existing code ...

    // Event listener for "Adicionar ao carrinho" button
    $('.add-to-cart-button').click(function () {
        // Add your logic here for adding the product to the cart
        alert("Product added to cart!");
    });
});


$(document).ready(function () {
    // Event listener para o dropdown "Choose a Size"
    $('#size').focus(function () {
        // Adiciona uma classe ao contêiner dos botões quando o dropdown é focado
        $('.button-container').addClass('dropdown-open');
    });

    // Event listener para fechar o dropdown
    $('#size').focusout(function () {
        // Remove a classe quando o dropdown é fechado
        $('.button-container').removeClass('dropdown-open');
    });
});


// Event listener for increment button
    $('#increment').click(function () {
        var currentQuantity = parseInt($('#quantity').text());
        if (currentQuantity < 10) { // Adjust the maximum limit as needed
            $('#quantity').text(currentQuantity + 1);
        }
    });

    // Event listener for decrement button
    $('#decrement').click(function () {
        var currentQuantity = parseInt($('#quantity').text());
        if (currentQuantity > 1) {
            $('#quantity').text(currentQuantity - 1);
        }
    });

