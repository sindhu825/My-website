// small helpers
document.addEventListener('DOMContentLoaded', function(){
  // put current year
  const y = new Date().getFullYear();
  document.getElementById('year')?.textContent = y;
  document.getElementById('year2')?.textContent = y;
  document.getElementById('year3')?.textContent = y;

  // theme toggle simple
  document.getElementById('themeToggle')?.addEventListener('click', function(){
    document.body.classList.toggle('dark');
  });
});

// tiny jQuery example: highlight nav link on click (works once pages are loaded)
$(function(){
  $('.nav a').on('click', function(){
    $('.nav a').removeClass('active');
    $(this).addClass('active');
  });
});        