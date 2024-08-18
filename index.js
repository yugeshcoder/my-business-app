function sub(){
  let item = {
    date : document.getElementById("date").value,
    model : document.getElementById("model").value,
    total : document.getElementById("total").value,
    tones : document.getElementById("tones").value
  };
  localStorage.setItem(item.date+item.model+item.total,JSON.stringify(item));
}