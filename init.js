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
  };
})();
