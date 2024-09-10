document.addEventListener('DOMContentLoaded', function() {
    // احصل على الزر باستخدام الـ ID الفريد
    var toggleDarkModeButton = document.getElementById('toggleDarkMode');
    
    // تحقق من وجود الزر قبل إضافة الحدث
    if (toggleDarkModeButton) {
        toggleDarkModeButton.addEventListener('click', function() {
            // أضف أو أزل فئة الوضع الداكن
            document.body.classList.toggle('dark-theme');
        });
    }
});
document.addEventListener('DOMContentLoaded', function() {
    // احصل على الزر باستخدام الـ ID الفريد
    var toggleDarkModeButton = document.getElementById('toggleDarkMode');
    
    // تحقق من وجود الزر قبل إضافة الحدث
    if (toggleDarkModeButton) {
        toggleDarkModeButton.addEventListener('click', function() {
            // أضف أو أزل فئة الوضع الداكن
            document.body.classList.toggle('dark-theme');
        });
    }

    // تحديث شريط التقدم عند تحميل الصفحة
    window.addEventListener('load', function() {
        document.getElementById('progress').style.width = '100%';
    });

    // تفعيل تأثير انزلاق النصوص
    var elements = document.querySelectorAll('.slide-in');
    elements.forEach(function(element) {
        element.classList.add('visible');
    });

    // رسم بياني باستخدام Chart.js
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});
// تفعيل تأثيرات الانتقال عند التمرير
document.addEventListener('DOMContentLoaded', function() {
    var fadeElements = document.querySelectorAll('.fade-in');
    
    function checkVisibility() {
        fadeElements.forEach(function(element) {
            var rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                element.classList.add('visible');
            }
        });
    }
    
    window.addEventListener('scroll', checkVisibility);
    checkVisibility();
});
// رسم بياني باستخدام Chart.js
document.addEventListener('DOMContentLoaded', function() {
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [{
                label: 'Monthly Data',
                data: [12, 19, 3, 5, 2, 3],
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});
