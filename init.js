(function () {
  window.onload = () => {
    /* header */
    // redirect to index on header logo click
    try {
      document.getElementById("pthdr2logoswan").onclick = () => {
        location.href = "https://css.adminapps.cornell.edu";
      };
    } catch (error) {}

    /* index page */
    // RHS table: edit card titles
    try {
      document.getElementById(
        "win0divDERIVED_SSS_SCL_SSS_SC_LNK2_NAMEGP"
      ).innerHTML = "Enrollment";
    } catch (error) {}

    try {
      document.getElementById(
        "win0divDERIVED_SSS_SCL_SSS_SC_LNK1_NAMEGP"
      ).innerHTML = "Resources";
    } catch (error) {}

    /* button style override */
    try {
      Array.from(document.querySelectorAll(".PSPUSHBUTTON")).forEach((elt) => {
        elt.setAttribute(
          "style",
          "border: none !important; height: auto !important; border-radius: 6px !important;"
        );
        Array.from(elt.childNodes).forEach((elt) => {
          elt.setAttribute(
            "style",
            "border: none !important; background: #d5e1ed !important;"
          );
        });
      });
    } catch (error) {}

    /* remove button stylesheet */
    // Array.prototype.forEach.call(
    //   document.querySelectorAll(
    //     'link[rel=stylesheet][href*="PSSTYLEDEF_TANGERINE_5.css"]'
    //   ),
    //   function (element) {
    //     try {
    //       element.parentNode.removeChild(element);
    //     } catch (err) {}
    //   }
    // );
  };
})();
