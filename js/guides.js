document.getElementById('button-gdd').addEventListener('click', function() {
    this.classList.remove('primary')
    document.getElementById('button-ecu').classList.add('primary')
    document.getElementById('gdd').style.display = 'block';
    document.getElementById('ecumap').style.display = 'none';
  });
  
  document.getElementById('button-ecu').addEventListener('click', function() {
    this.classList.remove('primary')
    document.getElementById('button-gdd').classList.add('primary')
    document.getElementById('gdd').style.display = 'none';
    document.getElementById('ecumap').style.display = 'block';
  });