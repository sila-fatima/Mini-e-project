function productoneslector() {
    let product_select = document.getElementById("selected-name").value;
    let product_image = document.getElementById("product-img");
    let product_detail = document.getElementById("product-detail");
    let product_name = document.getElementById("product-name");
    if (product_select == "Plush Microfiber/Suede 3+1 Sofa Set") {
        product_name.innerHTML = "Plush Microfiber/Suede 3+1 Sofa Set";
        product_image.src = "../ashley furniture/ashleyfurniture img/img1.jpg";
        product_detail.innerHTML = ` <li>High-back support for enhanced comfort </li>
                        <li>Oversized, padded armrests</li>
                        <li>Plush microfiber/suede-like polyester fabric</li>
                        <li>Stain-resistant and easy to clean</li>`
    }
    else if (product_select == "Traditional Rolled-Arm Classic Sofa") {
        product_name.innerHTML = "Traditional Rolled-Arm Classic Sofa";
        product_image.src = "../ashley furniture/ashleyfurniture img/img2.jpg";
        product_detail.innerHTML = `<li>Traditional rolled-arm design</li>
                        <li>Clean box-style seat and back cushions</li>
                        <li>Neutral jute-blend upholstery</li>
                        <li>Patterned toss pillows for added style</li>`


    }
    else if (product_select == "Power Lift Massage Recliner ") {
        product_name.innerHTML = "Power Lift Massage Recliner ";
        product_image.src = "../ashley furniture/ashleyfurniture img/img3.avif";
        product_detail.innerHTML = ` <li>Electric-powered lift and recline mechanism</li>
                        <li>Forward-tilting assist for easy standing</li>
                        <li>Air Leather or PU faux leather upholstery</li>
                        <li>Waterproof and low-maintenance surface</li>`


    }
    else if (product_select == "Modern 7-Seater L-Shaped Sectional with Matching Ottoman") {
        product_name.innerHTML = "Modern 7-Seater L-Shaped Sectional with Matching Ottoman";
        product_image.src = "../ashley furniture/ashleyfurniture img/img4.jpg";
        product_detail.innerHTML = `<li>Low-profile, modern design</li>
                        <li>Corner-blocked frame for corner or center placement</li>
                        <li>Imported jute or linen-blend upholstery</li>
                        <li>Breathable, stain-resistant fabric</li>`


    }
    else if (product_select == "Modern L-Shaped Sectional with Matching Ottoman") {
        product_name.innerHTML = "Modern L-Shaped Sectional with Matching Ottoman";
        product_image.src = "../ashley furniture/ashleyfurniture img/img5.jpg";
        product_detail.innerHTML = ` <li>Sleek, low-profile contemporary design</li>
                        <li>Corner-blocked frame for versatile placement</li>
                        <li>Imported jute or linen-blend upholstery</li>
                        <li>Breathable and stain-resistant fabric</li>`


    }
    else if (product_select == "Contemporary Minimalist Armchair sofa") {
        product_name.innerHTML = "Contemporary Minimalist Armchair sofa";
        product_image.src = "../ashley furniture/ashleyfurniture img/img6.jpg";
        product_detail.innerHTML = `<li>Streamlined contemporary design</li>
                        <li>Slim track arms for a modern profile</li>
                        <li>Padded backrest for upright comfort</li>
                        <li>Premium textured fabric upholstery (polyester-linen or basketweave)</li>`


    }
    else if (product_select == "Elite Comfort 3-Seater Power Recliner") {
        product_name.innerHTML = "Elite Comfort 3-Seater Power Recliner";
        product_image.src = "../ashley furniture/ashleyfurniture img/img7.jpg";
        product_detail.innerHTML = `  <li>High-grade Air Leather or top-grain cow leather upholstery</li>
                        <li>Luxurious, wear-resistant finish</li>
                        <li>Split-back design with deep horizontal tufting</li>
                        <li>Enhanced lumbar and neck support</li>`


    }
    else if (product_select == "The Cloud-Plush") {
        product_name.innerHTML = "The Cloud-Plush";
        product_image.src = "../ashley furniture/ashleyfurniture img/img8.jpeg";
        product_detail.innerHTML = `  <li>Minimalist contemporary design</li>
                        <li>Deep, wide-set seat cushions for lounging comfort</li>
                        <li>Premium velvet or bouclé fabric upholstery</li>
                        <li>Warp-resistant, durable construction</li>`


    }
    else if (product_select == "Urban Executive Office Sofa") {
        product_name.innerHTML = "Urban Executive Office Sofa";
        product_image.src = "../ashley furniture/ashleyfurniture img/img9.jpg";
        product_detail.innerHTML = `  <li>3+2+1 seating configuration</li>
                        <li>Premium Aire Leather upholstery</li>
                        <li>Multi-position reclining mechanism</li>
                        <li>Built-in heating function</li>`


    }
    else if (product_select == "The Regal Navy L-Shaped Sectional with Chaise") {
        product_name.innerHTML = "The Regal Navy L-Shaped Sectional with Chaise";
        product_image.src = "../ashley furniture/ashleyfurniture img/img10.jpg";
        product_detail.innerHTML = ` <li>L-shaped modular configuration with chaise lounge</li>
                        <li>Premium navy velvet or high-performance polyester fabric</li>
                        <li>Fade-resistant and soft upholstery</li>
                        <li>Modern, low-profile elevated design</li>`


    }
    else if (product_select == "Tufted Velvet Tuxedo Sofa with Ottoman") {
        product_name.innerHTML = "Tufted Velvet Tuxedo Sofa with Ottoman";
        product_image.src = "../b&c/c&b images/one.png";
        product_detail.innerHTML = ` <li>Tuxedo-style arms and back at the same height for a clean, structured silhouette</li>
                        <li>Deep-button tufting for timeless elegance</li>
                        <li>Premium black velvet upholstery with a soft, luxurious feel</li>
                        <li>Rich texture that subtly reflects light</li>
                        <li>Matching tufted ottoman for use as a coffee table or extra seating</li>`


    }
    else if (product_select == "Traditional Camelback Sofa") {
        product_name.innerHTML = "Traditional Camelback Sofa";
        product_image.src = "../b&c/c&b images/two.jpg";
        product_detail.innerHTML = ` <li>Traditional 18th-century design with a timeless appeal</li>
                        <li>Distinctive camelback silhouette with a single or double curved backrest</li>
                        <li>Center peak in the backrest creates an elegant focal point</li>
                        <li>High, rolled scrolled arms for a formal look</li>
                        <li>Single long seat cushion or tight-upholstered seat</li>
                        <li>Firm, upright seating experience ideal for formal spaces</li>`


    }
    else if (product_select == "Osaka Sofa") {
        product_image.src = "../b&c/c&b images/three.jpg";
        product_name.innerHTML = "Osaka Sofa";
        product_detail.innerHTML = `  <li>Designed by Anders Nørgaard with a light, feminine expression</li>
                        <li>Inclined armrests that visually open up room space</li>
                        <li>Tufted seat cushions secured with Velcro for stability</li>
                        <li>Frame made of solid pine and plywood</li>
                        <li>High-resilience (HR) foam cushions for supportive, comfortable seating</li>`


    }
    else if (product_select == "Crescent Sofa") {
        product_name.innerHTML = "Crescent Sofa";
        product_image.src = "../b&c/c&b images/four.png";
        product_detail.innerHTML = ` <li>Modern curved silhouette for a soft, flowing look</li>
                        <li>Breaks away from traditional boxy furniture layouts</li>
                        <li>Ideal for open living spaces or compact apartments</li>
                        <li>Sits on slim metal legs for a "floating" appearance</li>
                        <li>Leg finishes often available in gold, black, or chrome</li>`


    }
    else if (product_select == "BACKSÄLEN") {
        product_name.innerHTML = "BACKSÄLEN";
        product_image.src = "../b&c/c&b images/five.jpg";
        product_detail.innerHTML = ` <li>Designed for deep, comfortable lounging</li>
                        <li>High, wide armrests for added support and comfort</li>
                        <li>Generous seat depth for curling up and relaxing</li>
                        <li>Loose-fitting cover for a casual, modern look</li>
                        <li>Reversible chaise longue for flexible placement</li>`}
    else if (product_select == "MORABO") {
        product_name.innerHTML = "MORABO";
        product_image.src = "../b&c/c&b images/six.jpg";
        product_detail.innerHTML = `<li>Price: PKR 185,000</li>
                                    <li>Material: Fabric</li>
                                    <li>Dimensions: 84" x 36" x 32"</li>
                                    <li>Color: Gray</li>
                                    <li>Features: Tight-fitting fabric cover, high-resilience foam cushions, removable armrests</li>`}



    else if (product_select == "Orange Fabric Chesterfield Sofa") {
        product_name.innerHTML = "Orange Fabric Chesterfield Sofa";
        product_image.src = "../b&c/c&b images/seven.webp";
        product_detail.innerHTML = `<li>Iconic tufted button design for a sophisticated look</li>
                        <li>Formal appearance with ergonomic, supportive seating</li>
                        <li>High-density foam cushions for comfort</li>
                        <li>Durable hardwood frame (e.g., Red Oak or Keekar) for long-lasting use</li>`


    }
    else if (product_select == "Norden Luxe") {
        product_name.innerHTML = "Norden Luxe";
        product_image.src = "../b&c/c&b images/eight8.png";
        product_detail.innerHTML = `<li>Tight-fitting fabric cover for a neat, tailored appearance</li>
                        <li>Tufted seat and back cushions for a sophisticated look</li>
                        <li>Suitable for both minimalist and traditional interiors</li>
                        <li>High-resilience foam for medium-firm comfort</li>
                        <li>Maintains shape and support over time</li>`


    }
    else if (product_select == "Linear Muse") {
        product_name.innerHTML = "Linear Muse";
        product_image.src = "../b&c/c&b images/nine.jpeg";
        product_detail.innerHTML = ` <li>Tight-fitting fabric cover for a neat, tailored appearance</li>
                        <li>Tufted seat and back cushions for a sophisticated look</li>
                        <li>Suitable for both minimalist and traditional interiors</li>
                        <li>High-resilience foam for medium-firm comfort</li>
                        <li>Maintains shape and support over time</li>`


    }
    else if (product_select == "The Loveseat") {
        product_name.innerHTML = "The Loveseat";
        product_image.src = "../b&c/c&b images/ten.jpg";
        product_detail.innerHTML = `<li>Low-profile design for a relaxed, modern look</li>
                        <li>Signature extra-wide armrests for additional seating or surface space</li>
                        <li>Sturdy armrests suitable for gatherings or holding items</li>
                        <li>Seat cushions with pocket springs and high-resilience foam</li>
                        <li>Firm support that adapts to your body’s contours</li>`


    }
    else if (product_select == "Zen-Curved Luxury 3-Seater Sofa") {
        product_name.innerHTML = "Zen-Curved Luxury 3-Seater Sofa";
        product_image.src = "../boconcept/bo cocept imges/img1.jpg";
        product_detail.innerHTML = `<li>Crescent-shaped silhouette with flowing backrest and arms</li>
                        <li>Premium white or cream bouclé upholstery</li>
                        <li>High-density foam seating for firm, durable support</li>`


    }
    else if (product_select == "The Cloud-Minimalist Ivory 3-Seater Sofa") {
        product_name.innerHTML = "The Cloud-Minimalist Ivory 3-Seater Sofa";
        product_image.src = "../boconcept/bo cocept imges/img2.webp";
        product_detail.innerHTML = `<li>Streamlined, low-profile silhouette with deep, wide cushions</li>
                        <li>Premium ivory bouclé or velvet upholstery</li>
                        <li>Solid Sheesham or Kikar wood frame with high-resilience foam</li>
                        <li>Minimalist design with tapered wooden legs or low-profile base</li>`


    }
    else if (product_select == "Contour Luxury Curved Sofa") {
        product_name.innerHTML = "Contour Luxury Curved Sofa";
        product_image.src = "../boconcept/bo cocept imges/img3.jpg";
        product_detail.innerHTML = `<li>Curved, continuous back-wrapped silhouette</li>
                        <li>Premium velvet or soft bouclé upholstery</li>
                        <li>Solid and synthetic wood frame for durability</li>
                        <li>Concealed legs for a floating, sleek look</li>`


    }
    else if (product_select == "Elite Grand 3-Seater Motion Recliner Sofa") {
        product_name.innerHTML = "Elite Grand 3-Seater Motion Recliner Sofa";
        product_image.src = "../boconcept/bo cocept imges/img4.jpg";
        product_detail.innerHTML = ` <li>Split-back silhouette with deep horizontal tufting for lumbar support</li>
                        <li>Oversized padded armrests for added comfort</li>
                        <li>Upholstered in Pure Cow Leather or high-performance Air Leather</li>
                        <li>Heavy-duty steel reclining mechanism with Sheesham wood frame</li>`


    }
    else if (product_select == "Grand 3-Seater Recliner with Console") {
        product_name.innerHTML = "Grand 3-Seater Recliner with Console";
        product_image.src = "../boconcept/bo cocept imges/img5.jpg";
        product_detail.innerHTML = `<li>Luxury motion sofa with ergonomic support</li>
                        <li>Upholstered in top-grain cow leather or high-performance Air Leather</li>
                        <li>Central fold-down console with dual stainless steel cup holders and optional charging/power
                            features</li>
                        <li>Reinforced steel reclining mechanism; outer seats recline up to 150°</li>
                    `


    }
    else if (product_select == "Elite 3-Seater Executive Leather Motion Recliner") {
        product_name.innerHTML = "Elite 3-Seater Executive Leather Motion Recliner";
        product_image.src = "../boconcept/bo cocept imges/img6.jpg";
        product_detail.innerHTML = `     <li>3-seater motion recliner for ergonomic lounging</li>
                        <li>Upholstered in Pure Cow Leather or high-performance Air Leather</li>
                        <li>Split-back design with horizontal deep-tufting and oversized padded armrests</li>
                        <li>Reinforced carbon alloy steel reclining mechanism; outer seats recline up to 150°</li>`


    }
    else if (product_select == "The Nordic Minimalist Ivory 3-Seater Sofa") {
        product_name.innerHTML = "The Nordic Minimalist Ivory 3-Seater Sofa<";
        product_image.src = "../boconcept/bo cocept imges/img7.jpg";
        product_detail.innerHTML = `<li>Low-profile, sleek silhouette with deep, spacious seating</li>
                        <li>Slim, squared-off track arms for a compact footprint</li>
                        <li>Upholstered in premium off-white linen or textured bouclé</li>
                        <li>Solid beech or Sheesham wood frame</li>`



    }
    else if (product_select == "Indivi Sofa") {
        product_name.innerHTML = "Indivi Sofa";
        product_image.src = "../boconcept/bo cocept imges/img8.jpg";
        product_detail.innerHTML = `<li>Modular design: 2-seater, 3-seater, or L-shaped sectional</li>
                        <li>Solid wood and plywood frame with Nozag steel springs</li>
                        <li>Cushions with high-density foam and fiber balls for support</li>
                        <li>Customizable with 120+ fabrics or leathers</li>`


    }
    else if (product_select == "Carmo Sofa") {
        product_name.innerHTML = "Carmo Sofa";
        product_image.src = "../boconcept/bo cocept imges/img9.jpg";
        product_detail.innerHTML = `<li>Fully upholstered units that can connect or stand alone</li>
                        <li>Cubic, low-profile modular design</li>
                        <li>Nearly invisible 5 cm legs for a floating look</li>
                        <li>Oversized piping accentuating square edges</li>`


    }
    else if (product_select == "Hampton Sofa") {
        product_name.innerHTML = "Hampton Sofa";
        product_image.src = "../boconcept/bo cocept imges/img10.jpg";
        product_detail.innerHTML = `<li>Low base with wide, deep seat modules for a relaxed style</li>
                        <li>Manually adjustable backrests and headrests for customized comfort</li>
                        <li>Integrated storage in armrests and footstools</li>
                        <li>Versatile design suitable for modern living spaces</li>`


    }
    else if (product_select == "IKEA PÄRUP 3-Seater Sofa") {
        product_name.innerHTML = "IKEA PÄRUP 3-Seater Sofa";
        product_image.src = "../ikea/ikea-sofa-pictures/ikea image1.jpg";
        product_detail.innerHTML = ` <li>Comfortable upright seating for lounging and formal use</li>
                        <li>Pocket-spring seat cushions for consistent support and shape retention</li>
                        <li>Piping detail along armrests for a refined look</li>
                        <li>Slim wooden legs providing clearance for easy cleaning</li>
                        <li>Removable, machine-washable covers for easy maintenance</li>`


    }
    else if (product_select == "IKEA Landskrona model 1") {
        product_name.innerHTML = "IKEA Landskrona model 1";
        product_image.src = "../ikea/ikea-sofa-pictures/ikeaimage2.jpg";
        product_detail.innerHTML = ` <li>Seat cushions with high-resilience foam and polyester fiber wadding for medium-firm comfort
                        </li>
                        <li>Sturdy frame made of plywood, particleboard, and solid wood</li>
                        <li>Choice of solid oak legs for warmth or chrome-plated steel legs for an industrial look</li>
                        <li>High-quality grain leather on contact surfaces for leather versions</li>
                        <li>Durable coated fabric on non-leather surfaces for a cost-effective option</li>`


    }
    else if (product_select == "IKEA Uppland model 2") {
        product_name.innerHTML = "IKEA Uppland model 2";
        product_image.src = " ../ikeav/ikea-sofa-pictures/ikea3.jpg";
        product_detail.innerHTML = ` <li>Successor to the EKTORP with larger overall dimensions</li>
                        <li>Designed for a more comfortable, embracing feel</li>
                        <li>Karlshov cover made from durable, yarn-dyed 100% cotton</li>
                        <li>Soft-to-the-touch fabric with classic vertical stripes</li>
                        <li>Seat cushions with pocket springs for firm support</li>
                        <li>Foam and fiber top layers add relaxing softness</li>`


    }
    else if (product_select == "IKEA Landskrona Model 2") {
        product_name.innerHTML = "IKEA Landskrona Model 2";
        product_image.src = "../ikea/ikea-sofa-pictures/ikea4.jpg";
        product_detail.innerHTML = `<li>Classic design with a sophisticated, tailored appearance</li>
                        <li>Tufted seat and back cushions for an elegant look</li>
                        <li>Complements both minimalist and traditional interiors</li>
                        <li>High-resilience foam for lasting comfort</li>
                        <li>Medium-firm seating that maintains its shape over time</li>`


    }
    else if (product_select == "IKEA Klippan") {
        product_name.innerHTML = "IKEA Klippan";
        product_image.src = "../ikea/ikea-sofa-pictures/ikea5.webp";
        product_detail.innerHTML = ` <li>Compact, minimalist design ideal for small apartments or dorm rooms</li>
                        <li>Removable and machine-washable covers for easy cleaning</li>
                        <li>Pet- and child-friendly practicality</li>
                        <li>Durable metal spring construction</li>
                        <li>Firm yet springy seating comfort</li>`


    }
    else if (product_select == "IKEA Ektorp") {
        product_name.innerHTML = "IKEA Ektorp";
        product_image.src = "../ikea/ikea-sofa-pictures/ikea6.jpg";
        product_detail.innerHTML = ` <li>Thick, reversible back cushions with soft polyester fiber filling</li>
                        <li>Seat cushions combine high-resilience foam and polyester fiber wadding</li>
                        <li>Cushions quickly regain their shape after use</li>
                        <li>Classic rounded armrests for a traditional look</li>
                        <li>Removable slipcover for easy maintenance and versatility</li>`


    }
    else if (product_select == "IKEA Kivik") {
        product_name.innerHTML = "IKEA Kivik";
        product_image.src = "../ikea/ikea-sofa-pictures/ikea7.jpg";
        product_detail.innerHTML = ` <li>Generous, deep seat for superior comfort</li>
                        <li>Supportive back design for relaxed seating</li>
                        <li>Highly modular layout for flexible arrangements</li>
                        <li>Chaise longue can be placed on the left or right</li>
                        <li>Wide armrests that double as extra seating or a surface for essentials</li>`


    }
    else if (product_select == "IKEA Jattebo model 1") {
        product_name.innerHTML = "IKEA Jattebo model 1";
        product_image.src = "../ikea/ikea-sofa-pictures/ikea8.jpg";
        product_detail.innerHTML = `<li>Highly flexible modular design to suit different room layouts</li>
                        <li>Integrated storage under each seating module, including the chaise longue</li>
                        <li>Gas spring dampers for smooth and easy opening and closing</li>
                        <li>Medium-soft comfort with pocket springs and high-resilience foam</li>
                        <li>Maintains its shape over time</li>
                        <li>Finished on all sides, suitable for placement against a wall or as a room centerpiece</li>`


    }
    else if (product_select == "IKEA Uppland Model 1") {
        product_name.innerHTML = "IKEA Uppland Model 1";
        product_image.src = "../ikea/ikea-sofa-pictures/ikea9.jpg";
        product_detail.innerHTML = ` <li>Deep seat design that feels comfortable and embracing</li>
                        <li>Seat cushions combine pocket springs, high-resilience foam, and polyester fibers</li>
                        <li>Balanced feel with firm support and relaxing softness</li>
                        <li>Reversible back cushions for even wear</li>
                        <li>Helps maintain shape and durability over long-term use</li>`


    }
    else if (product_select == "IKEA Jattebo model 2") {
        product_name.innerHTML = "IKEA Jattebo model 2";
        product_image.src = "../ikea/ikea-sofa-pictures/ikea10.jpg";
        product_detail.innerHTML = ` <li>Functional modular design with clean, modern lines</li>
                        <li>Deep seating for enhanced comfort</li>
                        <li>Integrated storage under every seat and chaise module</li>
                        <li>Gas spring dampers keep seats open for easy access</li>
                        <li>Designed to look good from all angles, suitable for center-room placement</li>`


    }
    else if (product_select == "Zenith Lounger") {
        product_name.innerHTML = "Zenith Lounger";
        product_image.src = "../laz boys/laz boys images/img1.jpg";
        product_detail.innerHTML = `  <li>Adjustable to three positions: upright, lean back, and full recline</li>
                        <li>Built-in footstool that extends with recline</li>
                        <li>Ideal for reading, watching movies, or napping</li>
                        <li>Sleek, rounded shape for a modern, compact look</li>
                        <li>Fits easily into smaller living rooms or bedrooms</li>`


    }
    else if (product_select == "Summit Slumber") {
        product_name.innerHTML = "Summit Slumber";
        product_image.src = "../laz boys/laz boys images/img2.webp";
        product_detail.innerHTML = `<li>Bold design with a modern, stylish appearance</li>
                        <li>Deep bucket chaise seats for enhanced comfort</li>
                        <li>Wide, padded armrests that cradle the body</li>
                        <li>High, channeled backrest with fiber for head, neck, and lumbar support</li>
                        <li>Less bulky alternative to traditional overstuffed recliners</li>`


    }
    else if (product_select == "Vanguard Slate") {
        product_name.innerHTML = "Vanguard Slate";
        product_image.src = "../laz boys/laz boys images/img3.jpg";
        product_detail.innerHTML = `<li>Sharp, tailored design for a neat, sophisticated look</li>
                        <li>Seat cushions with high-resilience foam and polyester fiber wadding</li>
                        <li>Maintains shape and comfort over years of use</li>
                        <li>Tight-fitting cover for a clean, polished appearance</li>
                        <li>Versatile style fits minimalist and formal settings</li>`


    }
    else if (product_select == "Breezy Shoreline") {
        product_name.innerHTML = "Breezy Shoreline";
        product_image.src = "../laz boys/laz boys images/img4.jpg";
        product_detail.innerHTML = ` <li>Deep, embracing seating for enhanced comfort</li>
                        <li>Seat cushions with pocket springs, high-resilience foam, and polyester fibers</li>
                        <li>Balanced feel with firm support and soft top layers</li>
                        <li>Larger and taller than EKTORP for more lounging space</li>
                        <li>Karlshov cover in durable cotton with timeless vertical stripes</li>
                        <li>Easy-to-refresh, airy look suitable for many interiors</li>`


    }
    else if (product_select == "Meadow Embrace") {
        product_name.innerHTML = "Meadow Embrace";
        product_image.src = "../laz boys/laz boys images/img5.jpg";
        product_detail.innerHTML = ` <li>Family-friendly design ideal for long periods of sitting</li>
                        <li>Deep seat for maximum comfort</li>
                        <li>Multiple loose back cushions that can be rearranged for personalized support</li>
                        <li>High backrest for additional support</li>
                        <li>Comfortable and versatile for various living spaces</li>`


    }
    else if (product_select == "Nordic Cradle") {
        product_name.innerHTML = "Nordic Cradle";
        product_image.src = "../laz boys/laz boys images/img6.jpg";
        product_detail.innerHTML = ` <li>Bentwood frame made of layer-glued birch veneer for slight, comfortable resilience</li>
                        <li>High, gently curved backrest for back and neck support</li>
                        <li>Compact, uniform design ideal for smaller living spaces</li>
                        <li>Versatile and stylish accent chair for bedrooms or living areas</li>
                    `


    }
    else if (product_select == "Sylvan Spire") {
        product_name.innerHTML = "Sylvan Spire";
        product_image.src = "../laz boys/laz boys images/img7.jpg";
        product_detail.innerHTML = `<li>Designed by Francis Cayouette with a modern, sleek silhouette</li>
                        <li>High, enveloping backrest for a sense of privacy</li>
                        <li>Ideal for reading, working, or creating a quiet spot</li>
                        <li>Cold-molded foam shell for firm, durable seating</li>`


    }
    else if (product_select == "Luxe Lounger") {
        product_name.innerHTML = "Luxe Lounger";
        product_image.src = "../laz boys/laz boys images/img8.jpg";
        product_detail.innerHTML = `<li>Key Feature – Premium air leather or top-grain Nappa leather upholstery that is breathable,
                            durable, and water-resistant – Key Feature</li>
                        <li>Key Feature – Whisper-quiet electric recline with independent seat control, motorized
                            headrest, and lumbar adjustment – Key Feature</li>
                        <li>Key Feature – Modern amenities including USB-A & USB-C ports, wireless charging, cup
                            holders, and hidden storage – Key Feature</li>`


    }
    else if (product_select == "The Obsidian Orbit Modular Recline") {
        product_name.innerHTML = "The Obsidian Orbit Modular Recline";
        product_image.src = "../laz boys/laz boys images/img9.webp";
        product_detail.innerHTML = `<li>Expansive L-shaped modular sectional designed to anchor large living spaces</li>
                        <li>Deep, overstuffed lumbar and headrest padding for enhanced comfort and support</li>
                        <li>Durable dark espresso top-grain leather upholstery that develops a rich patina over time
                        </li>
                        <li>Smooth power-motion reclining mechanism with near-flat recline functionality</li>
                        <li>Light grey upholstered ottomans for versatile seating and visual contrast</li>`


    }
    else if (product_select == "The Ruby Horizon Modular Wing") {
        product_name.innerHTML = "The Ruby Horizon Modular Wing";
        product_image.src = "../laz boys/laz boys images/img10.jpg";
        product_detail.innerHTML = ` <li>Modular L-shaped sectional that can be reconfigured to suit different room layouts</li>
                        <li>High-sheen cherry red leather upholstery that is soft, vibrant, and visually striking</li>
                        <li>Overstuffed back cushions and padded wrap-around armrests for sink-in comfort</li>
                        <li>Crisp modern profile balanced with mid-century–inspired tapered oak wood feet</li>
                        <li>Slightly elevated base that enhances style while fitting large open-concept spaces</li>`


    }
    else if (product_select == "The Amber Vault Tufted Sovereign") {
        product_name.innerHTML = "The Amber Vault Tufted Sovereign";
        product_image.src = "../natuzzi/natuzzi sofa img/images.jpg";
        product_detail.innerHTML = `<li>Three-seater sofa with mid-century modern design and clean geometric silhouette</li>
                        <li>100% top-grain cognac-brown leather that develops a rich patina over time</li>
                        <li>Deep hand-tufted backrest and boxed-edge seat cushions offering medium-firm comfort</li>
                        <li>Substantial square track arms for a bold and structured appearance</li>
                        <li>Kiln-dried solid hardwood frame with slim tapered metal legs in dark grey for durability and
                            style</li>`


    }
    else if (product_select == "The Lumina Cloudscape Sectional") {
        product_name.innerHTML = "The Lumina Cloudscape Sectional";
        product_image.src = "../natuzzi/natuzzi sofa img/img2.jpeg";
        product_detail.innerHTML = `<li>Avant-garde modular sectional with organic, deep-rounded seating modules</li>
                        <li>Low-slung profile creating a floating, airy aesthetic</li>
                        <li>Premium snow-white bouclé or fluffy performance fabric for soft tactile comfort</li>
                        <li>Customizable configuration to suit various room layouts</li>
                        <li>Perfect for high-end urban penthouses or spacious open-plan villas</li>`


    }
    else if (product_select == "The Sienna Rift Modular Solstice") {
        product_name.innerHTML = "The Sienna Rift Modular Solstice";
        product_image.src = "../natuzzi/natuzzi sofa img/img3.jpeg";
        product_detail.innerHTML = `                        <li>L-shaped modular sectional with oversized deep-seated cushions</li>
                        <li>Premium terracotta-hued performance fabric that is breathable and stain-resistant</li>
                        <li>Broad, boxy armrests providing a strong architectural aesthetic</li>
                        <li>Hidden low-profile feet for a modern, grounded appearance</li>
                        <li>Vibrant color suitable for large open-concept living rooms and urban lofts or villas</li>
`


    }
    else if (product_select == "The Forest Verdant Luxe Collection") {
        product_name.innerHTML = "The Forest Verdant Luxe Collection";
        product_image.src = "../natuzzi/natuzzi sofa img/img4.jpg";
        product_detail.innerHTML = `<li>Three-seater sofa and matching single armchair with a cohesive design</li>
                        <li>Premium olive-green velvet upholstery that is soft, luxurious, and visually striking</li>
                        <li>High-density "Supreme 10" foam providing ergonomic lumbar and neck support</li>
                        <li>Deep, plush cushions supported by a kiln-dried hardwood frame for durability</li>
                        <li>Natural-finish wooden legs adding stability and a refined aesthetic</li>`


    }
    else if (product_select == "The Aura Pearl Motion Sectional") {
        product_name.innerHTML = "The Aura Pearl Motion Sectional";
        product_image.src = "../natuzzi/natuzzi sofa img/img5.jpg";
        product_detail.innerHTML = `  <li>Modular L-shaped sectional with deep-contoured seating for maximum comfort</li>
                        <li>Premium stain-resistant Pearl White silicon leather or high-density boucle upholstery</li>
                        <li>Whisper-quiet electric recline with optional motorized headrests and lumbar support</li>
                        <li>Low-profile design with hidden recessed glides for a floating, airy aesthetic</li>
                        <li>Ideal for minimalist, high-end apartments or villas in Karachi, Lahore, and Islamabad</li>`


    }
    else if (product_select == "The Alabaster Throne Motion Suite") {
        product_name.innerHTML = "The Alabaster Throne Motion Suite";
        product_image.src = "../natuzzi/natuzzi sofa img/img6.jpg";
        product_detail.innerHTML = ` <li>Three-seater sofa, two-seater loveseat, and matching armchair in a coordinated suite</li>
                        <li>Premium top-grain cream leather with sophisticated two-tone finish and spill protection</li>
                        <li>German-inspired power-motion technology with independent reclining and neck-roll headrest
                            adjustment</li>
                        <li>Track-style arms with integrated lighted USB and USB-C charging ports</li>
                        <li>Reinforced metal and kiln-dried hardwood frame for durability and structural support</li>`


    }
    else if (product_select == "The Ivory Zenith Tech-Lounge") {
        product_name.innerHTML = "The Ivory Zenith Tech-Lounge";
        product_image.src = "../natuzzi/natuzzi sofa img/img7.jpg";
        product_detail.innerHTML = ` <li>Three-seater sofa, two-seater loveseat, and matching armchair in a coordinated ensemble</li>
                        <li>Premium cream-colored top-grain leather or high-performance Air Leather upholstery</li>
                        <li>Whisper-quiet electric zero-wall reclining with adjustable neck rolls for cervical support
                        </li>
                        <li>Side-mounted panels with integrated USB-A and USB-C charging ports</li>
                        <li>Heavy-duty reinforced steel chassis with kiln-dried hardwood frames for durability</li>`


    }
    else if (product_select == "The Ruby Horizon Curved Sectional") {
        product_name.innerHTML = "The Ruby Horizon Curved Sectional";
        product_image.src = "../natuzzi/natuzzi sofa img/img8.webp";
        product_detail.innerHTML = ` <li>Semi-circular modular sectional with sweeping, sculptural silhouette</li>
                        <li>Decadent burgundy velvet upholstery with multi-tonal sheen and soft hand-feel</li>
                        <li>Low-profile backrest and extra-deep cushions with high-resiliency foam and pocket spring
                            support</li>
                        <li>Designed for intimate conversation and grand living spaces</li>
                        <li>Perfect for pairing with metallic accents and neutral textures in upscale homes</li>
`


    }
    else if (product_select == "The Charcoal Verticality Modular Sectional") {
        product_name.innerHTML = "The Charcoal Verticality Modular Sectional";
        product_image.src = "../natuzzi/natuzzi sofa img/img9.jpg";
        product_detail.innerHTML = `<li>Modular L-shaped or U-shaped sectional for versatile room arrangements</li>
                        <li>Graphite-toned plush velvet upholstery with vertical channel tufting</li>
                        <li>Four-layer cushioning system with high-resiliency and soft flex foams</li>
                        <li>Sophisticated Art Deco-inspired design with crisp, linear form</li>
                        <li>Spacious seating providing both comfort and architectural elegance</li>
`


    }
    else if (product_select == "The Vanguard Azure Recliner Suite") {
        product_name.innerHTML = "The Vanguard Azure Recliner Suite";
        product_image.src = "../natuzzi/natuzzi sofa img/img10.avif";
        product_detail.innerHTML = `<li>Three-seater sofa, two-seater loveseat, and matching armchair in a cohesive suite</li>
                        <li>Premium sapphire blue velvet or high-grade leatherette that is soft and stain-resistant</li>
                        <li>Plush segmented backrests and wide padded track arms for ergonomic support</li>
                        <li>Integrated power-motion reclining with smooth, effortless operation</li>
                        <li>Ideal for dedicated home theaters or upscale living rooms in major Pakistani cities</li>`


    }
    else if (product_select == "The Serenity Sleeper Sofa") {
        product_name.innerHTML = "The Serenity Sleeper Sofa";
        product_image.src = "../oxford original/oxford-sofa-images/picture 1.jpg";
        product_detail.innerHTML = `<li>Convertible sleeper design for overnight guests</li>
                        <li>Durable textured Oatmeal Beige upholstery that complements any décor</li>
                        <li>Deep, plush seating for enhanced comfort</li>
                        <li>Clean, square arm and back design for a modern, tailored look</li>`


    }
    else if (product_select == "The Versailles Velvet Chaise") {
        product_name.innerHTML = "The Versailles Velvet Chaise";
        product_image.src = "../oxford original/oxford-sofa-images/picture2.webp";
        product_detail.innerHTML = `<li>Upholstered in rich, jewel-toned royal blue velvet</li>
                        <li>Chesterfield-inspired design with button-tufted backrest</li>
                        <li>Light, elegantly turned wooden legs for a refined finish</li>
                        <li>Plush, comfortable cushioning for extended lounging</li>`


    }
    else if (product_select == "The Nirvana Lounge") {
        product_name.innerHTML = "The Nirvana Lounge";
        product_image.src = "../oxford original/oxford-sofa-images/pic3.webp";
        product_detail.innerHTML = ` <li>Low-profile, floor-length design with hidden legs for a grounded, seamless appearance</li>
                        <li>Cloud-style silhouette featuring soft edges and generously overstuffed cushions</li>
                        <li>Deep seating construction for a relaxed, lounge-like comfort</li>
                        <li>High-performance upholstery (linen blend, chenille, or polyester) for durability and easy
                            care</li>`


    }
    else if (product_select == "The Cumulus Lounge") {
        product_name.innerHTML = "The Cumulus Lounge";
        product_image.src = "../oxford original/oxford-sofa-images/pic4.jpg";
        product_detail.innerHTML = `  <li>Low-profile, floor-length design with invisible legs for a grounded, modern look</li>
                        <li>Overstuffed cushions and soft, rounded edges for a relaxed cloud-style aesthetic</li>
                        <li>Deep lounge seating with high-density foam and down or synthetic fiber top layers</li>
                        <li>High-performance upholstery in Chenille or Bouclé for durability and elegance</li>`


    }
    else if (product_select == "The Arctic Drift") {
        product_name.innerHTML = "The Arctic Drift";
        product_image.src = "../oxford original/oxford-sofa-images/pic5.jpg";
        product_detail.innerHTML = `<li>Low-profile, floor-length design with invisible legs for a grounded, modern look</li>
                        <li>Overstuffed cushions and rounded edges for a relaxed cloud-style aesthetic</li>
                        <li>High-performance upholstery in Chenille or Bouclé fabrics</li>
                        <li>Deep lounge seating with high-density foam and down or synthetic fiber top layers</li>`


    }
    else if (product_select == "The Elara Sectional") {
        product_name.innerHTML = "The Elara Sectional";
        product_image.src = "../oxford original/oxford-sofa-images/pic6.jpg";
        product_detail.innerHTML = `<li>U-shaped configuration that comfortably seats four or more people</li>
                        <li>Contemporary, symmetrical design with deep-seated cushions</li>
                        <li>High-density foam seating for a supportive, medium-firm deep lounge feel</li>
                        <li>Durable high-performance upholstery in linen or corduroy fabrics</li>`


    }
    else if (product_select == "The Tangerine Peak Futon") {
        product_name.innerHTML = "The Tangerine Peak Futon";
        product_image.src = "../oxford original/oxford-sofa-images/pic7.avif";
        product_detail.innerHTML = `<li>Vibrant orange color for a bold, modern accent</li>
                        <li>Streamlined, armless design that maximizes floor space and sightlines</li>
                        <li>Ribbed, button-tufted cushioned back for retro style and comfort</li>
                        <li>Sturdy wood frame with metallic black or chrome legs for stability and style</li>`


    }
    else if (product_select == "The Zenith Tufted Chaise") {
        product_name.innerHTML = "The Zenith Tufted Chaise";
        product_image.src = "../oxford original/oxford-sofa-images/pic8.jpg";
        product_detail.innerHTML = ` <li>Ergonomic S-curved structure for natural body alignment and deep relaxation</li>
                        <li>Tufted back and seat for mid-century style and plush comfort</li>
                        <li>Premium, easy-clean upholstery in velvet, corduroy, or linen-blends</li>
                        <li>Neutral color options like light grey to match modern décor</li>`


    }
    else if (product_select == "The Caiden Glamour Lounger") {
        product_name.innerHTML = "The Caiden Glamour Lounger";
        product_image.src = "../oxford original/oxford-sofa-images/pic9.jpg";
        product_detail.innerHTML = ` <li>Emerald green velvet upholstery for a luxurious, eye-catching look</li>
                        <li>Elegant curved silhouette with button-tufted backrest and seat</li>
                        <li>Armless, space-saving design ideal for reading nooks or bedroom corners</li>
                        <li>Sturdy hardwood frame for durability</li>`


    }
    else if (product_select == "The Royal Amethyst Settee") {
        product_name.innerHTML = "The Royal Amethyst Settee";
        product_image.src = "../oxford original/oxford-sofa-images/pic 10.avif";
        product_detail.innerHTML = ` <li>Art Deco-inspired design with mid-century modern touches</li>
                        <li>Vertical channel tufting on back and seat cushions for texture and plush comfort</li>
                        <li>Premium, non-pilling velvet upholstery that is soft, durable, and easy to clean</li>
                        <li>Sleek gold-finished metal legs for a striking, luxurious contrast</li>`


    }
    else if (product_select == "The Coastal Drift Modular Pavilion") {
        product_name.innerHTML = "The Coastal Drift Modular Pavilion";
        product_image.src = "../west elm/west elm img/img1.jpg";
        product_detail.innerHTML = ` <li>Sturdy Acacia or Teak wood frame treated for outdoor durability and weather resistance</li>
                        <li>Hand-woven rope detailing on back and armrests for a refined, airy design</li>
                        <li>Modular deep-seated sectional units adaptable to different outdoor layouts</li>
                        <li>High-density foam cushions upholstered in UV-protected, water-repellent fabric</li>
                        <li>Matching low-profile coffee table that complements modern outdoor settings</li>`


    }
    else if (product_select == "The Azure Zenith Mid-Century Muse") {
        product_name.innerHTML = "The Azure Zenith Mid-Century Muse";
        product_image.src = "../west elm/west elm img/img2.jpg";
        product_detail.innerHTML = ` <li>Streamlined mid-century–inspired silhouette with clean lines and a balanced rectangular form
                        </li>
                        <li>Premium jewel-toned teal velvet upholstery with a soft-touch feel and subtle sheen</li>
                        <li>Two plush seat cushions paired with matching cylindrical bolster pillows for added comfort
                        </li>
                        <li>Tapered solid oak legs with a natural finish for an airy, elevated appearance</li>
                        <li>Vibrant statement color that pairs beautifully with neutral palettes or metallic accents
                        </li>
`


    }
    else if (product_select == "The Ethereal Haven Scandi-Lounge") {
        product_name.innerHTML = "The Ethereal Haven Scandi-Lounge";
        product_image.src = "../west elm/west elm img/img3.jpg";
        product_detail.innerHTML = `<li>Minimalist Japandi-inspired design combining Scandinavian functionality and Japanese
                            simplicity</li>
                        <li>Low-profile, clean-lined silhouette that enhances a sense of openness</li>
                        <li>Durable, breathable textured linen-blend upholstery in a soft sand tone</li>
                        <li>L-shaped layout with a spacious right-arm facing chaise for relaxed lounging</li>
                        <li>Slim tapered light-oak legs that add warmth and visual lightness</li>`


    }
    else if (product_select == "The Alabaster Arcs Curved Sectional") {
        product_name.innerHTML = "The Alabaster Arcs Curved Sectional";
        product_image.src = "../west elm/west elm img/img4.jpg";
        product_detail.innerHTML = ` <li>Organic, bean-shaped modular design with asymmetrical curves for fluid, welcoming aesthetics
                        </li>
                        <li>Premium high-pile boucle fabric in warm off-white for a soft, tactile experience</li>
                        <li>Low-profile backrest with deep, continuous seating for ultimate comfort</li>
                        <li>Hidden recessed legs creating a floating appearance and sleek visual appeal</li>
                        <li>Soft-minimalist design ideal for high-end interiors with natural wood accents and
                            architectural features</li>`


    }
    else if (product_select == "The Sahara Solstice Floating Lounge") {
        product_name.innerHTML = "The Sahara Solstice Floating Lounge";
        product_image.src = "../west elm/west elm img/img5.jpg";
        product_detail.innerHTML = ` <li>Low-profile structured sofa in rich tan fabric with precise piping and oversized back
                            cushions</li>
                        <li>Sculptural curved chaise lounge in crisp white upholstery for fluid, inviting relaxation
                        </li>
                        <li>Light oak waterfall-style coffee table that complements the natural textures of the space
                        </li>
                        <li>Designed to create a serene, light-filled ambiance with floor-to-ceiling windows</li>
                        <li>Warm minimalist aesthetic ideal for high-end penthouses or modern villas</li>
`


    }
    else if (product_select == "The Amber Heritage Box-Frame") {
        product_name.innerHTML = "The Amber Heritage Box-Frame";
        product_image.src = "../west elm/west elm img/img6.jpg";
        product_detail.innerHTML = `<li>Three-seater sofa with vintage mid-century box-frame design</li>
                        <li>Rich cognac-colored distressed leather upholstery with natural grain and aged patina</li>
                        <li>High squared-off track arms and deep, plush seat cushions for firm yet comfortable support
                        </li>
                        <li>Solid tapered wooden legs providing elevation and an airy appearance</li>
                        <li>Ideal for industrial lofts, cozy studies, or urban living spaces in Pakistan</li>`


    }
    else if (product_select == "The Obsidian Cloud Modular Sectional") {
        product_name.innerHTML = "The Obsidian Cloud Modular Sectional";
        product_image.src = "../west elm/west elm img/img7.jpg";
        product_detail.innerHTML = `<li>L-shaped modular sectional with deep seating for comfort and versatility</li>
                        <li>Premium charcoal-grey performance fabric that is soft, textured, and wear-resistant</li>
                        <li>Low-profile backrests and broad squared-off arms for a minimalist, architectural aesthetic
                        </li>
                        <li>Slim matte-black steel legs providing a floating visual effect</li>
                        <li>Perfect for open-concept modern lounges and sophisticated, moody interiors</li>
`


    }
    else if (product_select == "The Midnight Monolith Modular Lounge") {
        product_name.innerHTML = "The Midnight Monolith Modular Lounge";
        product_image.src = "../west elm/west elm img/img8.jpg";
        product_detail.innerHTML = ` <li>Expansive L-shaped modular sectional for large living spaces</li>
                        <li>High-performance slate-grey fabric that is stain-resistant and durable</li>
                        <li>Deep, square-tufted seating with low-profile back cushions for comfort and style</li>
                        <li>Wide block-style armrests offering a minimalist, functional design</li>
                        <li>Recessed, non-visible feet creating a subtle floating appearance</li>`


    }
    else if (product_select == "The Mist Aurora Modular Chaise") {
        product_name.innerHTML = "The Mist Aurora Modular Chaise";
        product_image.src = "../west elm/west elm img/img9.jpg";
        product_detail.innerHTML = `<li>L-shaped modular sectional with integrated right-arm chaise for lounging</li>
                        <li>Premium heathered grey performance fabric that is durable and easy to maintain</li>
                        <li>High-density Molty foam cushioning for long-lasting support and comfort</li>
                        <li>Solid tapered wooden legs (Kiker or Beech) for elevation and contemporary style</li>
                        <li>Neutral palette suitable for customization with accent pillows and diverse interior styles
                        </li>
`


    }
    else if (product_select == "The Ivory Drift Urban Duet") {
        product_name.innerHTML = "The Ivory Drift Urban Duet";
        product_image.src = "../west elm/west elm img/img10.jpg";
        product_detail.innerHTML = ` <li>Two-seater sofa with architectural squared-off arms and deep foam cushioning</li>
                        <li>Matching high-back accent chair for complementary seating</li>
                        <li>Coordinating rectangular ottoman that doubles as a footrest or extra seat</li>
                        <li>Crisp white premium fabric upholstery for a clean, serene aesthetic</li>
                        <li>Elevated on light-toned wooden block feet (Kiker or Sheesham) for a subtle floating effect
                        </li>`


    } else if (product_select == "Select the product") {
        product_name.innerHTML = "Select The Product";
        product_image.src = "";
        product_detail.innerHTML = ""

    }
}
function producttwoselector() {
    let product_select2 = document.getElementById("selected-name2").value;
    let product_image2 = document.getElementById("product-img2");
    let product_detail2 = document.getElementById("product-detail2");
    let product_name2 = document.getElementById("product-name2");
    if (product_select2 == "Plush Microfiber/Suede 3+1 Sofa Set") {
        product_name2.innerHTML = "Plush Microfiber/Suede 3+1 Sofa Set";
        product_image2.src = "../ashley furniture/ashleyfurniture img/img1.jpg";
        product_detail2.innerHTML = ` <li>High-back support for enhanced comfort </li>
                        <li>Oversized, padded armrests</li>
                        <li>Plush microfiber/suede-like polyester fabric</li>
                        <li>Stain-resistant and easy to clean</li>`
    }
    else if (product_select2 == "Traditional Rolled-Arm Classic Sofa") {
        product_name2.innerHTML = "Traditional Rolled-Arm Classic Sofa";
        product_image2.src = "../ashley furniture/ashleyfurniture img/img2.jpg";
        product_detail2.innerHTML = `<li>Traditional rolled-arm design</li>
                        <li>Clean box-style seat and back cushions</li>
                        <li>Neutral jute-blend upholstery</li>
                        <li>Patterned toss pillows for added style</li>`


    }
    else if (product_select2 == "Power Lift Massage Recliner ") {
        product_name2.innerHTML = "Power Lift Massage Recliner ";
        product_image2.src = "../ashley furniture/ashleyfurniture img/img3.avif";
        product_detail2.innerHTML = ` <li>Electric-powered lift and recline mechanism</li>
                        <li>Forward-tilting assist for easy standing</li>
                        <li>Air Leather or PU faux leather upholstery</li>
                        <li>Waterproof and low-maintenance surface</li>`


    }
    else if (product_select2 == "Modern 7-Seater L-Shaped Sectional with Matching Ottoman") {
        product_name2.innerHTML = "Modern 7-Seater L-Shaped Sectional with Matching Ottoman";
        product_image2.src = "../ashley furniture/ashleyfurniture img/img4.jpg";
        product_detail2.innerHTML = `<li>Low-profile, modern design</li>
                        <li>Corner-blocked frame for corner or center placement</li>
                        <li>Imported jute or linen-blend upholstery</li>
                        <li>Breathable, stain-resistant fabric</li>`


    }
    else if (product_select2 == "Modern L-Shaped Sectional with Matching Ottoman") {
        product_name2.innerHTML = "Modern L-Shaped Sectional with Matching Ottoman";
        product_image2.src = "../ashley furniture/ashleyfurniture img/img5.jpg";
        product_detail2.innerHTML = ` <li>Sleek, low-profile contemporary design</li>
                        <li>Corner-blocked frame for versatile placement</li>
                        <li>Imported jute or linen-blend upholstery</li>
                        <li>Breathable and stain-resistant fabric</li>`


    }
    else if (product_select2 == "Contemporary Minimalist Armchair sofa") {
        product_name2.innerHTML = "Contemporary Minimalist Armchair sofa";
        product_image2.src = "../ashley furniture/ashleyfurniture img/img6.jpg";
        product_detail2.innerHTML = `<li>Streamlined contemporary design</li>
                        <li>Slim track arms for a modern profile</li>
                        <li>Padded backrest for upright comfort</li>
                        <li>Premium textured fabric upholstery (polyester-linen or basketweave)</li>`


    }
    else if (product_select2 == "Elite Comfort 3-Seater Power Recliner") {
        product_name2.innerHTML = "Elite Comfort 3-Seater Power Recliner";
        product_image2.src = "../ashley furniture/ashleyfurniture img/img7.jpg";
        product_detail2.innerHTML = `  <li>High-grade Air Leather or top-grain cow leather upholstery</li>
                        <li>Luxurious, wear-resistant finish</li>
                        <li>Split-back design with deep horizontal tufting</li>
                        <li>Enhanced lumbar and neck support</li>`


    }
    else if (product_select2 == "The Cloud-Plush") {
        product_name2.innerHTML = "The Cloud-Plush";
        product_image2.src = "../ashley furniture/ashleyfurniture img/img8.jpeg";
        product_detail2.innerHTML = `  <li>Minimalist contemporary design</li>
                        <li>Deep, wide-set seat cushions for lounging comfort</li>
                        <li>Premium velvet or bouclé fabric upholstery</li>
                        <li>Warp-resistant, durable construction</li>`


    }
    else if (product_select2 == "Urban Executive Office Sofa") {
        product_name2.innerHTML = "Urban Executive Office Sofa";
        product_image2.src = "../ashley furniture/ashleyfurniture img/img9.jpg";
        product_detail2.innerHTML = `  <li>3+2+1 seating configuration</li>
                        <li>Premium Aire Leather upholstery</li>
                        <li>Multi-position reclining mechanism</li>
                        <li>Built-in heating function</li>`


    }
    else if (product_select2 == "The Regal Navy L-Shaped Sectional with Chaise") {
        product_name2.innerHTML = "The Regal Navy L-Shaped Sectional with Chaise";
        product_image2.src = "../ashley furniture/ashleyfurniture img/img10.jpg";
        product_detail2.innerHTML = ` <li>L-shaped modular configuration with chaise lounge</li>
                        <li>Premium navy velvet or high-performance polyester fabric</li>
                        <li>Fade-resistant and soft upholstery</li>
                        <li>Modern, low-profile elevated design</li>`


    }
    else if (product_select2 == "Tufted Velvet Tuxedo Sofa with Ottoman") {
        product_name2.innerHTML = "Tufted Velvet Tuxedo Sofa with Ottoman";
        product_image2.src = "../b&c/c&b images/one.png";
        product_detail2.innerHTML = ` <li>Tuxedo-style arms and back at the same height for a clean, structured silhouette</li>
                        <li>Deep-button tufting for timeless elegance</li>
                        <li>Premium black velvet upholstery with a soft, luxurious feel</li>
                        <li>Rich texture that subtly reflects light</li>
                        <li>Matching tufted ottoman for use as a coffee table or extra seating</li>`


    }
    else if (product_select2 == "Traditional Camelback Sofa") {
        product_name2.innerHTML = "Traditional Camelback Sofa";
        product_image2.src = "../b&c/c&b images/two.jpg";
        product_detail2.innerHTML = ` <li>Traditional 18th-century design with a timeless appeal</li>
                        <li>Distinctive camelback silhouette with a single or double curved backrest</li>
                        <li>Center peak in the backrest creates an elegant focal point</li>
                        <li>High, rolled scrolled arms for a formal look</li>
                        <li>Single long seat cushion or tight-upholstered seat</li>
                        <li>Firm, upright seating experience ideal for formal spaces</li>`


    }
    else if (product_select2 == "Osaka Sofa") {
        product_image2.src = "../b&c/c&b images/three.jpg";
        product_name2.innerHTML = "Osaka Sofa";
        product_detail2.innerHTML = `  <li>Designed by Anders Nørgaard with a light, feminine expression</li>
                        <li>Inclined armrests that visually open up room space</li>
                        <li>Tufted seat cushions secured with Velcro for stability</li>
                        <li>Frame made of solid pine and plywood</li>
                        <li>High-resilience (HR) foam cushions for supportive, comfortable seating</li>`


    }
    else if (product_select2 == "Crescent Sofa") {
        product_name2.innerHTML = "Crescent Sofa";
        product_image2.src = "../b&c/c&b images/four.png";
        product_detail2.innerHTML = ` <li>Modern curved silhouette for a soft, flowing look</li>
                        <li>Breaks away from traditional boxy furniture layouts</li>
                        <li>Ideal for open living spaces or compact apartments</li>
                        <li>Sits on slim metal legs for a "floating" appearance</li>
                        <li>Leg finishes often available in gold, black, or chrome</li>`


    }
    else if (product_select2 == "BACKSÄLEN") {
        product_name2.innerHTML = "BACKSÄLEN";
        product_image2.src = "../b&c/c&b images/five.jpg";
        product_detail2.innerHTML = ` <li>Designed for deep, comfortable lounging</li>
                        <li>High, wide armrests for added support and comfort</li>
                        <li>Generous seat depth for curling up and relaxing</li>
                        <li>Loose-fitting cover for a casual, modern look</li>
                        <li>Reversible chaise longue for flexible placement</li>`}
    else if (product_select2 == "MORABO") {
        product_name2.innerHTML = "MORABO";
        product_image2.src = "../b&c/c&b images/six.jpg";
        product_detail2.innerHTML = `<li>Price: PKR 185,000</li>
                                    <li>Material: Fabric</li>
                                    <li>Dimensions: 84" x 36" x 32"</li>
                                    <li>Color: Gray</li>
                                    <li>Features: Tight-fitting fabric cover, high-resilience foam cushions, removable armrests</li>`}



    else if (product_select2 == "Orange Fabric Chesterfield Sofa") {
        product_name2.innerHTML = "Orange Fabric Chesterfield Sofa";
        product_image2.src = "../b&c/c&b images/seven.webp";
        product_detail2.innerHTML = `<li>Iconic tufted button design for a sophisticated look</li>
                        <li>Formal appearance with ergonomic, supportive seating</li>
                        <li>High-density foam cushions for comfort</li>
                        <li>Durable hardwood frame (e.g., Red Oak or Keekar) for long-lasting use</li>`


    }
    else if (product_select2 == "Norden Luxe") {
        product_name2.innerHTML = "Norden Luxe";
        product_image2.src = "../b&c/c&b images/eight8.png";
        product_detail2.innerHTML = `<li>Tight-fitting fabric cover for a neat, tailored appearance</li>
                        <li>Tufted seat and back cushions for a sophisticated look</li>
                        <li>Suitable for both minimalist and traditional interiors</li>
                        <li>High-resilience foam for medium-firm comfort</li>
                        <li>Maintains shape and support over time</li>`


    }
    else if (product_select2 == "Linear Muse") {
        product_name2.innerHTML = "Linear Muse";
        product_image2.src = "../b&c/c&b images/nine.jpeg";
        product_detail2.innerHTML = ` <li>Tight-fitting fabric cover for a neat, tailored appearance</li>
                        <li>Tufted seat and back cushions for a sophisticated look</li>
                        <li>Suitable for both minimalist and traditional interiors</li>
                        <li>High-resilience foam for medium-firm comfort</li>
                        <li>Maintains shape and support over time</li>`


    }
    else if (product_select2 == "The Loveseat") {
        product_name2.innerHTML = "The Loveseat";
        product_image2.src = "../b&c/c&b images/ten.jpg";
        product_detail2.innerHTML = `<li>Low-profile design for a relaxed, modern look</li>
                        <li>Signature extra-wide armrests for additional seating or surface space</li>
                        <li>Sturdy armrests suitable for gatherings or holding items</li>
                        <li>Seat cushions with pocket springs and high-resilience foam</li>
                        <li>Firm support that adapts to your body’s contours</li>`


    }
    else if (product_select2 == "Zen-Curved Luxury 3-Seater Sofa") {
        product_name2.innerHTML = "Zen-Curved Luxury 3-Seater Sofa";
        product_image2.src = "../boconcept/bo cocept imges/img1.jpg";
        product_detail2.innerHTML = `<li>Crescent-shaped silhouette with flowing backrest and arms</li>
                        <li>Premium white or cream bouclé upholstery</li>
                        <li>High-density foam seating for firm, durable support</li>`


    }
    else if (product_select2 == "The Cloud-Minimalist Ivory 3-Seater Sofa") {
        product_name2.innerHTML = "The Cloud-Minimalist Ivory 3-Seater Sofa";
        product_image2.src = "../boconcept/bo cocept imges/img2.webp";
        product_detail2.innerHTML = `<li>Streamlined, low-profile silhouette with deep, wide cushions</li>
                        <li>Premium ivory bouclé or velvet upholstery</li>
                        <li>Solid Sheesham or Kikar wood frame with high-resilience foam</li>
                        <li>Minimalist design with tapered wooden legs or low-profile base</li>`


    }
    else if (product_select2 == "Contour Luxury Curved Sofa") {
        product_name2.innerHTML = "Contour Luxury Curved Sofa";
        product_image2.src = "../boconcept/bo cocept imges/img3.jpg";
        product_detail2.innerHTML = `<li>Curved, continuous back-wrapped silhouette</li>
                        <li>Premium velvet or soft bouclé upholstery</li>
                        <li>Solid and synthetic wood frame for durability</li>
                        <li>Concealed legs for a floating, sleek look</li>`


    }
    else if (product_select2 == "Elite Grand 3-Seater Motion Recliner Sofa") {
        product_name2.innerHTML = "Elite Grand 3-Seater Motion Recliner Sofa";
        product_image2.src = "../boconcept/bo cocept imges/img4.jpg";
        product_detail2.innerHTML = ` <li>Split-back silhouette with deep horizontal tufting for lumbar support</li>
                        <li>Oversized padded armrests for added comfort</li>
                        <li>Upholstered in Pure Cow Leather or high-performance Air Leather</li>
                        <li>Heavy-duty steel reclining mechanism with Sheesham wood frame</li>`


    }
    else if (product_select2 == "Grand 3-Seater Recliner with Console") {
        product_name2.innerHTML = "Grand 3-Seater Recliner with Console";
        product_image2.src = "../boconcept/bo cocept imges/img5.jpg";
        product_detail2.innerHTML = `<li>Luxury motion sofa with ergonomic support</li>
                        <li>Upholstered in top-grain cow leather or high-performance Air Leather</li>
                        <li>Central fold-down console with dual stainless steel cup holders and optional charging/power
                            features</li>
                        <li>Reinforced steel reclining mechanism; outer seats recline up to 150°</li>
                    `


    }
    else if (product_select2 == "Elite 3-Seater Executive Leather Motion Recliner") {
        product_name2.innerHTML = "Elite 3-Seater Executive Leather Motion Recliner";
        product_image2.src = "../boconcept/bo cocept imges/img6.jpg";
        product_detail2.innerHTML = `     <li>3-seater motion recliner for ergonomic lounging</li>
                        <li>Upholstered in Pure Cow Leather or high-performance Air Leather</li>
                        <li>Split-back design with horizontal deep-tufting and oversized padded armrests</li>
                        <li>Reinforced carbon alloy steel reclining mechanism; outer seats recline up to 150°</li>`


    }
    else if (product_select2 == "The Nordic Minimalist Ivory 3-Seater Sofa") {
        product_name2.innerHTML = "The Nordic Minimalist Ivory 3-Seater Sofa";
        product_image2.src = "../boconcept/bo cocept imges/img7.jpg";
        product_detail2.innerHTML = `<li>Low-profile, sleek silhouette with deep, spacious seating</li>
                        <li>Slim, squared-off track arms for a compact footprint</li>
                        <li>Upholstered in premium off-white linen or textured bouclé</li>
                        <li>Solid beech or Sheesham wood frame</li>`



    }
    else if (product_select2 == "Indivi Sofa") {
        product_name2.innerHTML = "Indivi Sofa";
        product_image2.src = "../boconcept/bo cocept imges/img8.jpg";
        product_detail2.innerHTML = `<li>Modular design: 2-seater, 3-seater, or L-shaped sectional</li>
                        <li>Solid wood and plywood frame with Nozag steel springs</li>
                        <li>Cushions with high-density foam and fiber balls for support</li>
                        <li>Customizable with 120+ fabrics or leathers</li>`


    }
    else if (product_select2 == "Carmo Sofa") {
        product_name2.innerHTML = "Carmo Sofa";
        product_image2.src = "../boconcept/bo cocept imges/img9.jpg";
        product_detail2.innerHTML = `<li>Fully upholstered units that can connect or stand alone</li>
                        <li>Cubic, low-profile modular design</li>
                        <li>Nearly invisible 5 cm legs for a floating look</li>
                        <li>Oversized piping accentuating square edges</li>`


    }
    else if (product_select2 == "Hampton Sofa") {
        product_name2.innerHTML = "Hampton Sofa";
        product_image2.src = "../boconcept/bo cocept imges/img10.jpg";
        product_detail2.innerHTML = `<li>Low base with wide, deep seat modules for a relaxed style</li>
                        <li>Manually adjustable backrests and headrests for customized comfort</li>
                        <li>Integrated storage in armrests and footstools</li>
                        <li>Versatile design suitable for modern living spaces</li>`


    }
    else if (product_select2 == "IKEA PÄRUP 3-Seater Sofa") {
        product_name2.innerHTML = "IKEA PÄRUP 3-Seater Sofa";
        product_image2.src = "../ikea/ikea-sofa-pictures/ikea image1.jpg";
        product_detail2.innerHTML = ` <li>Comfortable upright seating for lounging and formal use</li>
                        <li>Pocket-spring seat cushions for consistent support and shape retention</li>
                        <li>Piping detail along armrests for a refined look</li>
                        <li>Slim wooden legs providing clearance for easy cleaning</li>
                        <li>Removable, machine-washable covers for easy maintenance</li>`


    }
    else if (product_select2 == "IKEA Landskrona model 1") {
        product_name2.innerHTML = "IKEA Landskrona model 1";
        product_image2.src = "../ikea/ikea-sofa-pictures/ikeaimage2.jpg";
        product_detail2.innerHTML = ` <li>Seat cushions with high-resilience foam and polyester fiber wadding for medium-firm comfort
                        </li>
                        <li>Sturdy frame made of plywood, particleboard, and solid wood</li>
                        <li>Choice of solid oak legs for warmth or chrome-plated steel legs for an industrial look</li>
                        <li>High-quality grain leather on contact surfaces for leather versions</li>
                        <li>Durable coated fabric on non-leather surfaces for a cost-effective option</li>`


    }
    else if (product_select2 == "IKEA Uppland model 2") {
        product_name2.innerHTML = "IKEA Uppland model 2";
        product_image2.src = " ../ikeav/ikea-sofa-pictures/ikea3.jpg";
        product_detail2.innerHTML = ` <li>Successor to the EKTORP with larger overall dimensions</li>
                        <li>Designed for a more comfortable, embracing feel</li>
                        <li>Karlshov cover made from durable, yarn-dyed 100% cotton</li>
                        <li>Soft-to-the-touch fabric with classic vertical stripes</li>
                        <li>Seat cushions with pocket springs for firm support</li>
                        <li>Foam and fiber top layers add relaxing softness</li>`


    }
    else if (product_select2 == "IKEA Landskrona Model 2") {
        product_name2.innerHTML = "IKEA Landskrona Model 2";
        product_image2.src = "../ikea/ikea-sofa-pictures/ikea4.jpg";
        product_detail2.innerHTML = `<li>Classic design with a sophisticated, tailored appearance</li>
                        <li>Tufted seat and back cushions for an elegant look</li>
                        <li>Complements both minimalist and traditional interiors</li>
                        <li>High-resilience foam for lasting comfort</li>
                        <li>Medium-firm seating that maintains its shape over time</li>`


    }
    else if (product_select2 == "IKEA Klippan") {
        product_name2.innerHTML = "IKEA Klippan";
        product_image2.src = "../ikea/ikea-sofa-pictures/ikea5.webp";
        product_detail2.innerHTML = ` <li>Compact, minimalist design ideal for small apartments or dorm rooms</li>
                        <li>Removable and machine-washable covers for easy cleaning</li>
                        <li>Pet- and child-friendly practicality</li>
                        <li>Durable metal spring construction</li>
                        <li>Firm yet springy seating comfort</li>`


    }
    else if (product_select2 == "IKEA Ektorp") {
        product_name2.innerHTML = "IKEA Ektorp";
        product_image2.src = "../ikea/ikea-sofa-pictures/ikea6.jpg";
        product_detail2.innerHTML = ` <li>Thick, reversible back cushions with soft polyester fiber filling</li>
                        <li>Seat cushions combine high-resilience foam and polyester fiber wadding</li>
                        <li>Cushions quickly regain their shape after use</li>
                        <li>Classic rounded armrests for a traditional look</li>
                        <li>Removable slipcover for easy maintenance and versatility</li>`


    }
    else if (product_select2 == "IKEA Kivik") {
        product_name2.innerHTML = "IKEA Kivik";
        product_image2.src = "../ikea/ikea-sofa-pictures/ikea7.jpg";
        product_detail2.innerHTML = ` <li>Generous, deep seat for superior comfort</li>
                        <li>Supportive back design for relaxed seating</li>
                        <li>Highly modular layout for flexible arrangements</li>
                        <li>Chaise longue can be placed on the left or right</li>
                        <li>Wide armrests that double as extra seating or a surface for essentials</li>`


    }
    else if (product_select2 == "IKEA Jattebo model 1") {
        product_name2.innerHTML = "IKEA Jattebo model 1";
        product_image2.src = "../ikea/ikea-sofa-pictures/ikea8.jpg";
        product_detail2.innerHTML = `<li>Highly flexible modular design to suit different room layouts</li>
                        <li>Integrated storage under each seating module, including the chaise longue</li>
                        <li>Gas spring dampers for smooth and easy opening and closing</li>
                        <li>Medium-soft comfort with pocket springs and high-resilience foam</li>
                        <li>Maintains its shape over time</li>
                        <li>Finished on all sides, suitable for placement against a wall or as a room centerpiece</li>`


    }
    else if (product_select2 == "IKEA Uppland Model 1") {
        product_name2.innerHTML = "IKEA Uppland Model 1";
        product_image2.src = "../ikea/ikea-sofa-pictures/ikea9.jpg";
        product_detail2.innerHTML = ` <li>Deep seat design that feels comfortable and embracing</li>
                        <li>Seat cushions combine pocket springs, high-resilience foam, and polyester fibers</li>
                        <li>Balanced feel with firm support and relaxing softness</li>
                        <li>Reversible back cushions for even wear</li>
                        <li>Helps maintain shape and durability over long-term use</li>`


    }
    else if (product_select2 == "IKEA Jattebo model 2") {
        product_name2.innerHTML = "IKEA Jattebo model 2";
        product_image2.src = "../ikea/ikea-sofa-pictures/ikea10.jpg";
        product_detail2.innerHTML = ` <li>Functional modular design with clean, modern lines</li>
                        <li>Deep seating for enhanced comfort</li>
                        <li>Integrated storage under every seat and chaise module</li>
                        <li>Gas spring dampers keep seats open for easy access</li>
                        <li>Designed to look good from all angles, suitable for center-room placement</li>`


    }
    else if (product_select2 == "Zenith Lounger") {
        product_name2.innerHTML = "Zenith Lounger";
        product_image2.src = "../laz boys/laz boys images/img1.jpg";
        product_detail2.innerHTML = `  <li>Adjustable to three positions: upright, lean back, and full recline</li>
                        <li>Built-in footstool that extends with recline</li>
                        <li>Ideal for reading, watching movies, or napping</li>
                        <li>Sleek, rounded shape for a modern, compact look</li>
                        <li>Fits easily into smaller living rooms or bedrooms</li>`


    }
    else if (product_select2 == "Summit Slumber") {
        product_name2.innerHTML = "Summit Slumber";
        product_image2.src = "../laz boys/laz boys images/img2.webp";
        product_detail2.innerHTML = `<li>Bold design with a modern, stylish appearance</li>
                        <li>Deep bucket chaise seats for enhanced comfort</li>
                        <li>Wide, padded armrests that cradle the body</li>
                        <li>High, channeled backrest with fiber for head, neck, and lumbar support</li>
                        <li>Less bulky alternative to traditional overstuffed recliners</li>`


    }
    else if (product_select2 == "Vanguard Slate") {
        product_name2.innerHTML = "Vanguard Slate";
        product_image2.src = "../laz boys/laz boys images/img3.jpg";
        product_detail2.innerHTML = `<li>Sharp, tailored design for a neat, sophisticated look</li>
                        <li>Seat cushions with high-resilience foam and polyester fiber wadding</li>
                        <li>Maintains shape and comfort over years of use</li>
                        <li>Tight-fitting cover for a clean, polished appearance</li>
                        <li>Versatile style fits minimalist and formal settings</li>`


    }
    else if (product_select2 == "Breezy Shoreline") {
        product_name2.innerHTML = "Breezy Shoreline";
        product_image2.src = "../laz boys/laz boys images/img4.jpg";
        product_detail2.innerHTML = ` <li>Deep, embracing seating for enhanced comfort</li>
                        <li>Seat cushions with pocket springs, high-resilience foam, and polyester fibers</li>
                        <li>Balanced feel with firm support and soft top layers</li>
                        <li>Larger and taller than EKTORP for more lounging space</li>
                        <li>Karlshov cover in durable cotton with timeless vertical stripes</li>
                        <li>Easy-to-refresh, airy look suitable for many interiors</li>`


    }
    else if (product_select2 == "Meadow Embrace") {
        product_name2.innerHTML = "Meadow Embrace";
        product_image2.src = "../laz boys/laz boys images/img5.jpg";
        product_detail2.innerHTML = ` <li>Family-friendly design ideal for long periods of sitting</li>
                        <li>Deep seat for maximum comfort</li>
                        <li>Multiple loose back cushions that can be rearranged for personalized support</li>
                        <li>High backrest for additional support</li>
                        <li>Comfortable and versatile for various living spaces</li>`


    }
    else if (product_select2 == "Nordic Cradle") {
        product_name2.innerHTML = "Nordic Cradle";
        product_image2.src = "../laz boys/laz boys images/img6.jpg";
        product_detail2.innerHTML = ` <li>Bentwood frame made of layer-glued birch veneer for slight, comfortable resilience</li>
                        <li>High, gently curved backrest for back and neck support</li>
                        <li>Compact, uniform design ideal for smaller living spaces</li>
                        <li>Versatile and stylish accent chair for bedrooms or living areas</li>
                    `


    }
    else if (product_select2 == "Sylvan Spire") {
        product_name2.innerHTML = "Sylvan Spire";
        product_image2.src = "../laz boys/laz boys images/img7.jpg";
        product_detail2.innerHTML = `<li>Designed by Francis Cayouette with a modern, sleek silhouette</li>
                        <li>High, enveloping backrest for a sense of privacy</li>
                        <li>Ideal for reading, working, or creating a quiet spot</li>
                        <li>Cold-molded foam shell for firm, durable seating</li>`


    }
    else if (product_select2 == "Luxe Lounger") {
        product_name2.innerHTML = "Luxe Lounger";
        product_image2.src = "../laz boys/laz boys images/img8.jpg";
        product_detail2.innerHTML = `<li>Key Feature – Premium air leather or top-grain Nappa leather upholstery that is breathable,
                            durable, and water-resistant – Key Feature</li>
                        <li>Key Feature – Whisper-quiet electric recline with independent seat control, motorized
                            headrest, and lumbar adjustment – Key Feature</li>
                        <li>Key Feature – Modern amenities including USB-A & USB-C ports, wireless charging, cup
                            holders, and hidden storage – Key Feature</li>`


    }
    else if (product_select2 == "The Obsidian Orbit Modular Recline") {
        product_name2.innerHTML = "The Obsidian Orbit Modular Recline";
        product_image2.src = "../laz boys/laz boys images/img9.webp";
        product_detail2.innerHTML = `<li>Expansive L-shaped modular sectional designed to anchor large living spaces</li>
                        <li>Deep, overstuffed lumbar and headrest padding for enhanced comfort and support</li>
                        <li>Durable dark espresso top-grain leather upholstery that develops a rich patina over time
                        </li>
                        <li>Smooth power-motion reclining mechanism with near-flat recline functionality</li>
                        <li>Light grey upholstered ottomans for versatile seating and visual contrast</li>`


    }
    else if (product_select2 == "The Ruby Horizon Modular Wing") {
        product_name2.innerHTML = "The Ruby Horizon Modular Wing";
        product_image2.src = "../laz boys/laz boys images/img10.jpg";
        product_detail2.innerHTML = ` <li>Modular L-shaped sectional that can be reconfigured to suit different room layouts</li>
                        <li>High-sheen cherry red leather upholstery that is soft, vibrant, and visually striking</li>
                        <li>Overstuffed back cushions and padded wrap-around armrests for sink-in comfort</li>
                        <li>Crisp modern profile balanced with mid-century–inspired tapered oak wood feet</li>
                        <li>Slightly elevated base that enhances style while fitting large open-concept spaces</li>`


    }
    else if (product_select2 == "The Amber Vault Tufted Sovereign") {
        product_name2.innerHTML = "The Amber Vault Tufted Sovereign";
        product_image2.src = "../natuzzi/natuzzi sofa img/images.jpg";
        product_detail2.innerHTML = `<li>Three-seater sofa with mid-century modern design and clean geometric silhouette</li>
                        <li>100% top-grain cognac-brown leather that develops a rich patina over time</li>
                        <li>Deep hand-tufted backrest and boxed-edge seat cushions offering medium-firm comfort</li>
                        <li>Substantial square track arms for a bold and structured appearance</li>
                        <li>Kiln-dried solid hardwood frame with slim tapered metal legs in dark grey for durability and
                            style</li>`


    }
    else if (product_select2 == "The Lumina Cloudscape Sectional") {
        product_name2.innerHTML = "The Lumina Cloudscape Sectional";
        product_image2.src = "../natuzzi/natuzzi sofa img/img2.jpeg";
        product_detail2.innerHTML = `<li>Avant-garde modular sectional with organic, deep-rounded seating modules</li>
                        <li>Low-slung profile creating a floating, airy aesthetic</li>
                        <li>Premium snow-white bouclé or fluffy performance fabric for soft tactile comfort</li>
                        <li>Customizable configuration to suit various room layouts</li>
                        <li>Perfect for high-end urban penthouses or spacious open-plan villas</li>`


    }
    else if (product_select2 == "The Sienna Rift Modular Solstice") {
        product_name2.innerHTML = "The Sienna Rift Modular Solstice";
        product_image2.src = "../natuzzi/natuzzi sofa img/img3.jpeg";
        product_detail2.innerHTML = `                        <li>L-shaped modular sectional with oversized deep-seated cushions</li>
                        <li>Premium terracotta-hued performance fabric that is breathable and stain-resistant</li>
                        <li>Broad, boxy armrests providing a strong architectural aesthetic</li>
                        <li>Hidden low-profile feet for a modern, grounded appearance</li>
                        <li>Vibrant color suitable for large open-concept living rooms and urban lofts or villas</li>
`


    }
    else if (product_select2 == "The Forest Verdant Luxe Collection") {
        product_name2.innerHTML = "The Forest Verdant Luxe Collection";
        product_image2.src = "../natuzzi/natuzzi sofa img/img4.jpg";
        product_detail2.innerHTML = `<li>Three-seater sofa and matching single armchair with a cohesive design</li>
                        <li>Premium olive-green velvet upholstery that is soft, luxurious, and visually striking</li>
                        <li>High-density "Supreme 10" foam providing ergonomic lumbar and neck support</li>
                        <li>Deep, plush cushions supported by a kiln-dried hardwood frame for durability</li>
                        <li>Natural-finish wooden legs adding stability and a refined aesthetic</li>`


    }
    else if (product_select2 == "The Aura Pearl Motion Sectional") {
        product_name2.innerHTML = "The Aura Pearl Motion Sectional";
        product_image2.src = "../natuzzi/natuzzi sofa img/img5.jpg";
        product_detail2.innerHTML = `  <li>Modular L-shaped sectional with deep-contoured seating for maximum comfort</li>
                        <li>Premium stain-resistant Pearl White silicon leather or high-density boucle upholstery</li>
                        <li>Whisper-quiet electric recline with optional motorized headrests and lumbar support</li>
                        <li>Low-profile design with hidden recessed glides for a floating, airy aesthetic</li>
                        <li>Ideal for minimalist, high-end apartments or villas in Karachi, Lahore, and Islamabad</li>`


    }
    else if (product_select2 == "The Alabaster Throne Motion Suite") {
        product_name2.innerHTML = "The Alabaster Throne Motion Suite";
        product_image2.src = "../natuzzi/natuzzi sofa img/img6.jpg";
        product_detail2.innerHTML = ` <li>Three-seater sofa, two-seater loveseat, and matching armchair in a coordinated suite</li>
                        <li>Premium top-grain cream leather with sophisticated two-tone finish and spill protection</li>
                        <li>German-inspired power-motion technology with independent reclining and neck-roll headrest
                            adjustment</li>
                        <li>Track-style arms with integrated lighted USB and USB-C charging ports</li>
                        <li>Reinforced metal and kiln-dried hardwood frame for durability and structural support</li>`


    }
    else if (product_select2 == "The Ivory Zenith Tech-Lounge") {
        product_name2.innerHTML = "The Ivory Zenith Tech-Lounge";
        product_image2.src = "../natuzzi/natuzzi sofa img/img7.jpg";
        product_detail2.innerHTML = ` <li>Three-seater sofa, two-seater loveseat, and matching armchair in a coordinated ensemble</li>
                        <li>Premium cream-colored top-grain leather or high-performance Air Leather upholstery</li>
                        <li>Whisper-quiet electric zero-wall reclining with adjustable neck rolls for cervical support
                        </li>
                        <li>Side-mounted panels with integrated USB-A and USB-C charging ports</li>
                        <li>Heavy-duty reinforced steel chassis with kiln-dried hardwood frames for durability</li>`


    }
    else if (product_select2 == "The Ruby Horizon Curved Sectional") {
        product_name2.innerHTML = "The Ruby Horizon Curved Sectional";
        product_image2.src = "../natuzzi/natuzzi sofa img/img8.webp";
        product_detail2.innerHTML = ` <li>Semi-circular modular sectional with sweeping, sculptural silhouette</li>
                        <li>Decadent burgundy velvet upholstery with multi-tonal sheen and soft hand-feel</li>
                        <li>Low-profile backrest and extra-deep cushions with high-resiliency foam and pocket spring
                            support</li>
                        <li>Designed for intimate conversation and grand living spaces</li>
                        <li>Perfect for pairing with metallic accents and neutral textures in upscale homes</li>
`


    }
    else if (product_select2 == "The Charcoal Verticality Modular Sectional") {
        product_name2.innerHTML = "The Charcoal Verticality Modular Sectional";
        product_image2.src = "../natuzzi/natuzzi sofa img/img9.jpg";
        product_detail2.innerHTML = `<li>Modular L-shaped or U-shaped sectional for versatile room arrangements</li>
                        <li>Graphite-toned plush velvet upholstery with vertical channel tufting</li>
                        <li>Four-layer cushioning system with high-resiliency and soft flex foams</li>
                        <li>Sophisticated Art Deco-inspired design with crisp, linear form</li>
                        <li>Spacious seating providing both comfort and architectural elegance</li>
`


    }
    else if (product_select2 == "The Vanguard Azure Recliner Suite") {
        product_name2.innerHTML = "The Vanguard Azure Recliner Suite";
        product_image2.src = "../natuzzi/natuzzi sofa img/img10.avif";
        product_detail2.innerHTML = `<li>Three-seater sofa, two-seater loveseat, and matching armchair in a cohesive suite</li>
                        <li>Premium sapphire blue velvet or high-grade leatherette that is soft and stain-resistant</li>
                        <li>Plush segmented backrests and wide padded track arms for ergonomic support</li>
                        <li>Integrated power-motion reclining with smooth, effortless operation</li>
                        <li>Ideal for dedicated home theaters or upscale living rooms in major Pakistani cities</li>`


    } else if (product_select2 == "The Serenity Sleeper Sofa") {
        product_name2.innerHTML = "The Serenity Sleeper Sofa";
        product_image2.src = "../oxford original/oxford-sofa-images/picture 1.jpg";
        product_detail2.innerHTML = `<li>Convertible sleeper design for overnight guests</li>
                        <li>Durable textured Oatmeal Beige upholstery that complements any décor</li>
                        <li>Deep, plush seating for enhanced comfort</li>
                        <li>Clean, square arm and back design for a modern, tailored look</li>`


    }
    else if (product_select2 == "The Versailles Velvet Chaise") {
        product_name2.innerHTML = "The Versailles Velvet Chaise";
        product_image2.src = "../oxford original/oxford-sofa-images/picture2.webp";
        product_detail2.innerHTML = `<li>Upholstered in rich, jewel-toned royal blue velvet</li>
                        <li>Chesterfield-inspired design with button-tufted backrest</li>
                        <li>Light, elegantly turned wooden legs for a refined finish</li>
                        <li>Plush, comfortable cushioning for extended lounging</li>`


    }
    else if (product_select2 == "The Nirvana Lounge") {
        product_name2.innerHTML = "The Nirvana Lounge";
        product_image2.src = "../oxford original/oxford-sofa-images/pic3.webp";
        product_detail2.innerHTML = ` <li>Low-profile, floor-length design with hidden legs for a grounded, seamless appearance</li>
                        <li>Cloud-style silhouette featuring soft edges and generously overstuffed cushions</li>
                        <li>Deep seating construction for a relaxed, lounge-like comfort</li>
                        <li>High-performance upholstery (linen blend, chenille, or polyester) for durability and easy
                            care</li>`


    }
    else if (product_select2 == "The Cumulus Lounge") {
        product_name2.innerHTML = "The Cumulus Lounge";
        product_image2.src = "../oxford original/oxford-sofa-images/pic4.jpg";
        product_detail2.innerHTML = `  <li>Low-profile, floor-length design with invisible legs for a grounded, modern look</li>
                        <li>Overstuffed cushions and soft, rounded edges for a relaxed cloud-style aesthetic</li>
                        <li>Deep lounge seating with high-density foam and down or synthetic fiber top layers</li>
                        <li>High-performance upholstery in Chenille or Bouclé for durability and elegance</li>`


    }
    else if (product_select2 == "The Arctic Drift") {
        product_name2.innerHTML = "The Arctic Drift";
        product_image2.src = "../oxford original/oxford-sofa-images/pic5.jpg";
        product_detail2.innerHTML = `<li>Low-profile, floor-length design with invisible legs for a grounded, modern look</li>
                        <li>Overstuffed cushions and rounded edges for a relaxed cloud-style aesthetic</li>
                        <li>High-performance upholstery in Chenille or Bouclé fabrics</li>
                        <li>Deep lounge seating with high-density foam and down or synthetic fiber top layers</li>`


    }
    else if (product_select2 == "The Elara Sectional") {
        product_name2.innerHTML = "The Elara Sectional";
        product_image2.src = "../oxford original/oxford-sofa-images/pic6.jpg";
        product_detail2.innerHTML = `<li>U-shaped configuration that comfortably seats four or more people</li>
                        <li>Contemporary, symmetrical design with deep-seated cushions</li>
                        <li>High-density foam seating for a supportive, medium-firm deep lounge feel</li>
                        <li>Durable high-performance upholstery in linen or corduroy fabrics</li>`


    }
    else if (product_select2 == "The Tangerine Peak Futon") {
        product_name2.innerHTML = "The Tangerine Peak Futon";
        product_image2.src = "../oxford original/oxford-sofa-images/pic7.avif";
        product_detail2.innerHTML = `<li>Vibrant orange color for a bold, modern accent</li>
                        <li>Streamlined, armless design that maximizes floor space and sightlines</li>
                        <li>Ribbed, button-tufted cushioned back for retro style and comfort</li>
                        <li>Sturdy wood frame with metallic black or chrome legs for stability and style</li>`


    }
    else if (product_select2 == "The Zenith Tufted Chaise") {
        product_name2.innerHTML = "The Zenith Tufted Chaise";
        product_image2.src = "../oxford original/oxford-sofa-images/pic8.jpg";
        product_detail2.innerHTML = ` <li>Ergonomic S-curved structure for natural body alignment and deep relaxation</li>
                        <li>Tufted back and seat for mid-century style and plush comfort</li>
                        <li>Premium, easy-clean upholstery in velvet, corduroy, or linen-blends</li>
                        <li>Neutral color options like light grey to match modern décor</li>`


    }
    else if (product_select2 == "The Caiden Glamour Lounger") {
        product_name2.innerHTML = "The Caiden Glamour Lounger";
        product_image2.src = "../oxford original/oxford-sofa-images/pic9.jpg";
        product_detail2.innerHTML = ` <li>Emerald green velvet upholstery for a luxurious, eye-catching look</li>
                        <li>Elegant curved silhouette with button-tufted backrest and seat</li>
                        <li>Armless, space-saving design ideal for reading nooks or bedroom corners</li>
                        <li>Sturdy hardwood frame for durability</li>`


    }
    else if (product_select2 == "The Royal Amethyst Settee") {
        product_name2.innerHTML = "The Royal Amethyst Settee";
        product_image2.src = "../oxford original/oxford-sofa-images/pic 10.avif";
        product_detail2.innerHTML = ` <li>Art Deco-inspired design with mid-century modern touches</li>
                        <li>Vertical channel tufting on back and seat cushions for texture and plush comfort</li>
                        <li>Premium, non-pilling velvet upholstery that is soft, durable, and easy to clean</li>
                        <li>Sleek gold-finished metal legs for a striking, luxurious contrast</li>`


    }
    else if (product_select2 == "The Coastal Drift Modular Pavilion") {
        product_name2.innerHTML = "The Coastal Drift Modular Pavilion";
        product_image2.src = "../west elm/west elm img/img1.jpg";
        product_detail2.innerHTML = ` <li>Sturdy Acacia or Teak wood frame treated for outdoor durability and weather resistance</li>
                        <li>Hand-woven rope detailing on back and armrests for a refined, airy design</li>
                        <li>Modular deep-seated sectional units adaptable to different outdoor layouts</li>
                        <li>High-density foam cushions upholstered in UV-protected, water-repellent fabric</li>
                        <li>Matching low-profile coffee table that complements modern outdoor settings</li>`


    }
    else if (product_select2 == "The Azure Zenith Mid-Century Muse") {
        product_name2.innerHTML = "The Azure Zenith Mid-Century Muse";
        product_image2.src = "../west elm/west elm img/img2.jpg";
        product_detail2.innerHTML = ` <li>Streamlined mid-century–inspired silhouette with clean lines and a balanced rectangular form
                        </li>
                        <li>Premium jewel-toned teal velvet upholstery with a soft-touch feel and subtle sheen</li>
                        <li>Two plush seat cushions paired with matching cylindrical bolster pillows for added comfort
                        </li>
                        <li>Tapered solid oak legs with a natural finish for an airy, elevated appearance</li>
                        <li>Vibrant statement color that pairs beautifully with neutral palettes or metallic accents
                        </li>
`


    }
    else if (product_select2 == "The Ethereal Haven Scandi-Lounge") {
        product_name2.innerHTML = "The Ethereal Haven Scandi-Lounge";
        product_image2.src = "../west elm/west elm img/img3.jpg";
        product_detail2.innerHTML = `<li>Minimalist Japandi-inspired design combining Scandinavian functionality and Japanese
                            simplicity</li>
                        <li>Low-profile, clean-lined silhouette that enhances a sense of openness</li>
                        <li>Durable, breathable textured linen-blend upholstery in a soft sand tone</li>
                        <li>L-shaped layout with a spacious right-arm facing chaise for relaxed lounging</li>
                        <li>Slim tapered light-oak legs that add warmth and visual lightness</li>`


    }
    else if (product_select2 == "The Alabaster Arcs Curved Sectional") {
        product_name2.innerHTML = "The Alabaster Arcs Curved Sectional";
        product_image2.src = "../west elm/west elm img/img4.jpg";
        product_detail2.innerHTML = ` <li>Organic, bean-shaped modular design with asymmetrical curves for fluid, welcoming aesthetics
                        </li>
                        <li>Premium high-pile boucle fabric in warm off-white for a soft, tactile experience</li>
                        <li>Low-profile backrest with deep, continuous seating for ultimate comfort</li>
                        <li>Hidden recessed legs creating a floating appearance and sleek visual appeal</li>
                        <li>Soft-minimalist design ideal for high-end interiors with natural wood accents and
                            architectural features</li>`


    }
    else if (product_select2 == "The Sahara Solstice Floating Lounge") {
        product_name2.innerHTML = "The Sahara Solstice Floating Lounge";
        product_image2.src = "../west elm/west elm img/img5.jpg";
        product_detail2.innerHTML = ` <li>Low-profile structured sofa in rich tan fabric with precise piping and oversized back
                            cushions</li>
                        <li>Sculptural curved chaise lounge in crisp white upholstery for fluid, inviting relaxation
                        </li>
                        <li>Light oak waterfall-style coffee table that complements the natural textures of the space
                        </li>
                        <li>Designed to create a serene, light-filled ambiance with floor-to-ceiling windows</li>
                        <li>Warm minimalist aesthetic ideal for high-end penthouses or modern villas</li>
`


    }
    else if (product_select2 == "The Amber Heritage Box-Frame") {
        product_name2.innerHTML = "The Amber Heritage Box-Frame";
        product_image2.src = "../west elm/west elm img/img6.jpg";
        product_detail2.innerHTML = `<li>Three-seater sofa with vintage mid-century box-frame design</li>
                        <li>Rich cognac-colored distressed leather upholstery with natural grain and aged patina</li>
                        <li>High squared-off track arms and deep, plush seat cushions for firm yet comfortable support
                        </li>
                        <li>Solid tapered wooden legs providing elevation and an airy appearance</li>
                        <li>Ideal for industrial lofts, cozy studies, or urban living spaces in Pakistan</li>`


    }
    else if (product_select2 == "The Obsidian Cloud Modular Sectional") {
        product_name2.innerHTML = "The Obsidian Cloud Modular Sectional";
        product_image2.src = "../west elm/west elm img/img7.jpg";
        product_detail2.innerHTML = `<li>L-shaped modular sectional with deep seating for comfort and versatility</li>
                        <li>Premium charcoal-grey performance fabric that is soft, textured, and wear-resistant</li>
                        <li>Low-profile backrests and broad squared-off arms for a minimalist, architectural aesthetic
                        </li>
                        <li>Slim matte-black steel legs providing a floating visual effect</li>
                        <li>Perfect for open-concept modern lounges and sophisticated, moody interiors</li>
`


    }
    else if (product_select2 == "The Midnight Monolith Modular Lounge") {
        product_name2.innerHTML = "The Midnight Monolith Modular Lounge";
        product_image2.src = "../west elm/west elm img/img8.jpg";
        product_detail2.innerHTML = ` <li>Expansive L-shaped modular sectional for large living spaces</li>
                        <li>High-performance slate-grey fabric that is stain-resistant and durable</li>
                        <li>Deep, square-tufted seating with low-profile back cushions for comfort and style</li>
                        <li>Wide block-style armrests offering a minimalist, functional design</li>
                        <li>Recessed, non-visible feet creating a subtle floating appearance</li>`


    }
    else if (product_select2 == "The Mist Aurora Modular Chaise") {
        product_name2.innerHTML = "The Mist Aurora Modular Chaise";
        product_image2.src = "../west elm/west elm img/img9.jpg";
        product_detail2.innerHTML = `<li>L-shaped modular sectional with integrated right-arm chaise for lounging</li>
                        <li>Premium heathered grey performance fabric that is durable and easy to maintain</li>
                        <li>High-density Molty foam cushioning for long-lasting support and comfort</li>
                        <li>Solid tapered wooden legs (Kiker or Beech) for elevation and contemporary style</li>
                        <li>Neutral palette suitable for customization with accent pillows and diverse interior styles
                        </li>
`


    }
    else if (product_select2 == "The Ivory Drift Urban Duet") {
        product_name2.innerHTML = "The Ivory Drift Urban Duet";
        product_image2.src = "../west elm/west elm img/img10.jpg";
        product_detail2.innerHTML = ` <li>Two-seater sofa with architectural squared-off arms and deep foam cushioning</li>
                        <li>Matching high-back accent chair for complementary seating</li>
                        <li>Coordinating rectangular ottoman that doubles as a footrest or extra seat</li>
                        <li>Crisp white premium fabric upholstery for a clean, serene aesthetic</li>
                        <li>Elevated on light-toned wooden block feet (Kiker or Sheesham) for a subtle floating effect
                        </li>`


    } else if (product_select2 == "Select the product") {
        product_name2.innerHTML = "Select The Product";
        product_image2.src = "";
        product_detail2.innerHTML2 = ""

    }
}