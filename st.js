 // create map
 var map = L.map('map').setView([13.745735, 100.562580], 14) 

   
  // basedmap2
      var OpenStreetMap_France = L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
     maxZoom: 20,
     attribution: '&copy; OpenStreetMap France | &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);

 

      var iconswuin = L.icon({
        iconUrl: 'https://cdn-icons-png.flaticon.com/128/5193/5193846.png',
        iconSize: [45, 55], // ขนาดของไอคอน
        // iconAnchor: [22, 94], // จุดที่ไอคอนจะถูกยึดในพิกเซล
        // popupAnchor: [-3, -76] // จุดที่ป๊อปอัพจะยึดในพิกเซล
    });

       var swuin= L.marker([13.744471, 100.562416],
            {
            draggable: false, // ขยับจุด
            title: 'ป้ายรถเมล์ฝั่ง มศว', // Add a title
            opacity: 1.5, // Adjust the opacity
            icon:iconswuin,
            zIndexOffset: 1000 
            }
        )
        // .bindPopup("<b>จุดเริ่มขึ้นรถเมล์ ฝั่งมศว</b><br>เมื่อเดินออกจากมหาวิทยาลัย <br>ป้ายจะอยู่ฝั่งซ้ายมือ <br>เดินถัดไปจากตลาดสุขตา<br><img src='bus/image/สกรีนช็อต 2024-05-18 222922.png' alt='Scenic view' class='popup-image'>")
        // .openPopup();
        // swuin.addTo(map);

      
        var iconswuout = L.icon({
          iconUrl: 'https://cdn-icons-png.flaticon.com/128/5193/5193846.png',
          iconSize: [45, 55], // ขนาดของไอคอน
          // iconAnchor: [22, 94], // จุดที่ไอคอนจะถูกยึดในพิกเซล
          // popupAnchor: [-3, -76] // จุดที่ป๊อปอัพจะยึดในพิกเซล
      });

      var swuout= L.marker([13.745735, 100.562580],
        {
        draggable: false, // ขยับจุด
        title: 'ป้ายรถเมล์ฝั่งตรงข้าม มศว', // Add a title
        opacity: 1.5, // Adjust the opacity
        icon:iconswuout,
        zIndexOffset: 1000
        }
    )
    // .bindPopup("<b>จุดเริ่มขึ้นรถเมล์ ฝั่งตรงข่ามมศว</b><br>เมื่อเดินออกจากมหาวิทยาลัย <br>ป้ายจะอยู่ฝั่งขวามือ <br>เดินข้ามทางม้าลายเผื่อไปฝั่งตรงข้าม<br><img src='https://img5.pic.in.th/file/secure-sv1/-2024-05-18-2232128add8c37bce2cce4.png' alt='Scenic view' class='popup-image'>")
    // .openPopup();

    // swuout.addTo(map);

    var busMarkers = L.layerGroup([swuin, swuout]);
    busMarkers.addTo(map); 

   

      var baseLayers ={
        'OSM' : OpenStreetMap_France}

        L.control.layers(baseLayers, {
          'SWU Station': busMarkers// Add busMarkers as a selectable layer
      }).addTo(map);
    
   

    

// onclick

var acc = document.getElementsByClassName("accordion");
var i;

  for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    // เช็คว่ากล่องเดิมมีคลาส "active" หรือไม่
    var isActive = this.classList.contains("active");
    
    // ปิดกล่องเดิมหากมีคลาส "active"
    var activeAccordions = document.querySelectorAll(".accordion.active");
    activeAccordions.forEach(function(acc) {
      acc.classList.remove("active");
      acc.nextElementSibling.style.maxHeight = null;
    });

    // เปิดหรือปิดกล่องที่ถูกคลิก
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (!isActive) {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } else {
      panel.style.maxHeight = null;
    }
  });
}

// map on click

// 53 go 
let mapInitializeds = false;
    function showMap() {
      

      if (mapInitializeds) return; // If map is already initialized, do nothing
    
      mapInitializeds = true;
      // แสดงแผนที่
      var mapElement = document.getElementById("map");
      mapElement.style.display = "block";
     
    

      var taxiIcon = L.icon({
        // iconUrl: 'bus/image/3-53-Photoroom.png-Photoroom.png',
        iconUrl: 'https://img5.pic.in.th/file/secure-sv1/3-53-Photoroom.png-Photoroom.png',
        iconSize: [150, 100]
      })
          // จุดเริ่มขึ้นรถเมล์ ฝั่งตรงข้ามมศว
      var marker = L.marker([13.745735, 100.562580
                      ], { icon: taxiIcon,zIndexOffset: 100 }).addTo(map)
            // .bindPopup("<b>3-53</b><br>").openPopup();
  
      var popupopposisswu = L.popup({ closeOnClick: false, autoClose: false })
              .setLatLng([13.744471, 100.562416])
              // .setContent("<b>จุดเริ่มขึ้นรถเมล์ ฝั่งตรงข่ามมศว</b><br>เมื่อเดินออกจากมหาวิทยาลัย <br>ป้ายจะอยู่ฝั่งขวามือ <br>เดินข้ามทางม้าลายเผื่อไปฝั่งตรงข้าม<br><img src='image/สกรีนช็อต 2024-05-18 223212.png' alt='Scenic view' class='popup-image'>")
              // .openOn(map);
  
      // สิ้นสุดป้าย
        // var newMarker = L.marker([13.7370886,100.6415429
        //               ], { draggable : false}).addTo(map);
  
        L.Routing.control({
          waypoints: [
                      // ป้ายระหว่างทาง
            L.latLng(13.745735, 100.562580),                   
                      L.latLng(13.744782, 100.585211),
                      L.latLng(13.744312, 100.602269),
                      L.latLng(13.754578, 100.612504),
                      L.latLng(13.752728, 100.618754),
                      L.latLng(13.755564, 100.627647),
                      L.latLng(13.752379, 100.639963),
                      L.latLng(13.747958, 100.644239),
                      L.latLng(13.7370886,100.6415429),
                      // L.latLng(),
                      // L.latLng(),
                      // L.latLng(),
                      // L.latLng()
          ],
          createMarker: function(i, waypoint, n) {
            // กำหนดรูป Marker แต่ละตำแหน่ง
            var iconUrl = 'https://img2.pic.in.th/pic/busGreen53cc095fac16e113.png'; // เปลี่ยนเป็น URL ของรูปภาพ Marker ที่ต้องการใช้
            var icon = L.icon({
              iconUrl: iconUrl,
              iconSize: [45, 55], // ขนาดของ Marker
              // iconAnchor: [16, 32], // จุดศูนย์กลางของ Marker ที่ติดตั้งบนแผนที่
              // popupAnchor: [0, -32] // จุดที่ Popup จะแสดงขึ้นเมื่อคลิกที่ Marker
            });

          

        
            return L.marker(waypoint.latLng, {
              icon: icon,
              draggable: false, // ปิดการลาก Marker
              
            });
          },
          draggableWaypoints: false,
          addWaypoints: false,
          lineOptions: {
                  styles: [{ color: 'green', opacity: 1, weight: 5 }]
              }
  
          //โค้ดรถขยับ 
        }).on('routesfound', function (e) {
          var routes = e.routes;
          console.log(routes);
  
          e.routes[0].coordinates.forEach(function (coord, index) {
            setTimeout(function () {
              marker.setLatLng([coord.lat, coord.lng]);
            }, 100 * index)
          })
  
        }).addTo(map);
    }



    // แถบเลื่อน มือถือ
 


  const busInfo = document.querySelector('.text');
  const handle = document.querySelector('.handle');
  
  let isDragging = false;
  let startY, startHeight;
  
  const onMouseMove = (e) => {
    if (!isDragging) return;
    const dy = e.clientY - startY;
    const newHeight = startHeight - dy;
    busInfo.style.height = `${newHeight}px`;
  };
  
  const onMouseUp = () => {
    isDragging = false;
    window.removeEventListener('mousemove', onMouseMove);
    window.removeEventListener('mouseup', onMouseUp);
  };
  
  const onMouseDown = (e) => {
    isDragging = true;
    startY = e.clientY;
    startHeight = busInfo.getBoundingClientRect().height;
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
  };
  
  handle.addEventListener('mousedown', onMouseDown);

  
  
  // For touch devices
  const onTouchMove = (e) => {
    if (!isDragging) return;
    const dy = e.touches[0].clientY - startY;
    const newHeight = startHeight - dy;
    busInfo.style.height = `${newHeight}px`;
  };
  
  const onTouchEnd = () => {
    isDragging = false;
    window.removeEventListener('touchmove', onTouchMove);
    window.removeEventListener('touchend', onTouchEnd);
  };
  
  const onTouchStart = (e) => {
    isDragging = true;
    startY = e.touches[0].clientY;
    startHeight = busInfo.getBoundingClientRect().height;
    window.addEventListener('touchmove', onTouchMove);
    window.addEventListener('touchend', onTouchEnd);
  };
  
  handle.addEventListener('touchstart', onTouchStart);







swuout.on('click', function() {
  if (window.matchMedia("(max-width:481px )").matches){
  // ซ่อนกล่องข้อความทั้งหมดก่อน
  var allTextBoxes = document.querySelectorAll('.one, .boxone, .text, .boxtwo');
  allTextBoxes.forEach(function(box) {
      box.style.display = 'none';
  });

  // แสดงกล่องข้อความที่เกี่ยวข้องกับ swuout
  var textBox = document.querySelector('.text');
  var newTextBox = document.querySelector('.boxone');

  if (textBox) {
      textBox.style.display = 'block';
  }

  if (newTextBox) {
      newTextBox.style.display = 'block';
  }
}
});

swuin.on('click', function() {
  if (window.matchMedia("(max-width:481px )").matches){
  // ซ่อนกล่องข้อความทั้งหมดก่อน
  var allTextBoxes = document.querySelectorAll('.one, .boxone, .text, .boxtwo');
  allTextBoxes.forEach(function(box) {
      box.style.display = 'none';
  });

  // แสดงกล่องข้อความที่เกี่ยวข้องกับ swuin
  var textBox = document.querySelector('.text');
  var newTextBox = document.querySelector('.boxtwo');

  if (textBox) {
      textBox.style.display = 'block';
  }

  if (newTextBox) {
      newTextBox.style.display = 'block';
  }
}
});

// แบบกด
// document.querySelector('.handle').addEventListener('click', function() {
//   var textBox = document.querySelector('.text');
//   if (textBox.style.display === 'none' || textBox.style.display === '') {
//       textBox.style.display = 'flex';
//       // ใช้ timeout เพื่อให้ transition ทำงานหลังจากที่ display ถูกตั้งค่า
//       setTimeout(() => {
//           textBox.classList.toggle('expanded');
//       }, 10);
//   } else {
//       textBox.classList.toggle('expanded');
//       textBox.addEventListener('transitionend', function() {
//           if (!textBox.classList.contains('expanded')) {
//               // textBox.style.display = 'none';
//           }
//       }, { once: true });
//   }
// });


