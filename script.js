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
// 返回顶部按钮
document.addEventListener("DOMContentLoaded", function () {
  const backTop = document.createElement("button");
  backTop.className = "back-top-btn";
  backTop.innerHTML = "↑";
  backTop.setAttribute("aria-label", "返回顶部");

  document.body.appendChild(backTop);

  window.addEventListener("scroll", function () {
    if (window.scrollY > 500) {
      backTop.classList.add("show");
    } else {
      backTop.classList.remove("show");
    }
  });

  backTop.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});
