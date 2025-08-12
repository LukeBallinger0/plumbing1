document.addEventListener('DOMContentLoaded', () => {
  const serviceCategory = document.getElementById('service-category');
  const serviceList = document.getElementById('service-list');

  if (serviceCategory && serviceList) {
    const services = {
      repairs: [
        "Leak Detection & Repair",
        "Drain Cleaning & Unclogging",
        "Pipe Repair & Replacement",
        "Water Heater Repair",
      ],
      installations: [
        "Fixture Installation (sinks, toilets, faucets)",
        "Water Heater Replacement",
        "New Pipe Installation",
      ],
      emergency: [
        "24/7 Emergency Leak Repair",
        "Burst Pipe Repair",
        "Emergency Drain Unclogging",
      ],
    };

    serviceCategory.addEventListener('change', (e) => {
      const selected = e.target.value;
      serviceList.innerHTML = '';

      if (services[selected]) {
        services[selected].forEach(service => {
          const li = document.createElement('li');
          li.textContent = service;
          serviceList.appendChild(li);
        });
      }
    });
  }
});
