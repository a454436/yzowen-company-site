/*
  手机端导航菜单
*/

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
    });
  });
}
// 全站右下角悬浮咨询按钮
document.addEventListener("DOMContentLoaded", function () {
  const floatingContact = document.createElement("div");
  floatingContact.className = "floating-contact";
  floatingContact.innerHTML = `
    <a href="contact.html" class="floating-btn primary">联系咨询</a>
    <a href="tel:13375273897" class="floating-btn secondary">拨打电话</a>
  `;
  document.body.appendChild(floatingContact);
});
