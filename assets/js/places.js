var state_arr = new Array("Andaman & Nicobar", "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chandigarh", "Chhattisgarh", "Dadra & Nagar Haveli", "Daman & Diu", "Delhi", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jammu & Kashmir", "Jharkhand", "Karnataka", "Kerala", "Lakshadweep", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Orissa", "Pondicherry", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Tripura", "Uttar Pradesh", "Uttaranchal", "West Bengal");

var s_a = new Array();
s_a[0]="";
s_a[1]=" Cellular Jail|Ross Island|Netaji Flag Hoisting Memorial";
s_a[2]="Archaeological Museum | Amaravati,Bhagwan Mahavir Government Museum | Victoria Jubilee Museum";
s_a[3]=" Jawaharlal Nehru Museum|Gompa Temple|Ita Fort";
s_a[4]="Kaziranga National Park|Shankardev Kalakshetra |Assam State Museum ";
s_a[5]=" Bodh Gaya | Bihar Museum | Jalan Museum";
s_a[6]=" The Palace of Assembly|The Open Hand Monument|The Tower of Shadows";
s_a[7]=" Bastar Palace | Kanker Palace | Bhoramdeo Temple ";
s_a[8]=" Church of Holy Jesus|Ruined Church|The Church of Our Lady of Remedios ";
s_a[9]=" Nani Daman Fort|Moti Daman Fort|Lighthouse ";
s_a[10]="Red Fort|Qutub Minar|Humayun's Tomb ";
s_a[11]="Goa Chitra Museum|Big Foot Museum|Archaeological Museum and Portrait Gallery ";
s_a[12]="Archaeological remains of a Harappa Port-Town, Lothal | Somnath Temple | Calico Museum of Textiles";
s_a[13]=" Jahaj Kothi Zonal Museum|Rewari Railway Heritage Museum|Dharohar Museum ";
s_a[14]=" Great Himalayan National Park|Shivalik Fossil Park|Library of Tibetan Works and Archives";
s_a[15]=" Bahu Fort | Mughal Gardens | Aru Valley ";
s_a[16]=" Terracotta Temples|Ketunga Dham|Betla Fort";
s_a[17]=" Monuments and forts of the Deccan Sultanate|Sacred Ensembles of the Hoysala|Hire Benkal, Megalithic Site";
s_a[18]=" Mattancherry Palace, Ernakulam|Mural Art Museum|Vaidyaratnam Ayurveda Museum";
s_a[19]=" Minicoy Island|Kadmat Island|Kavaratti island ";
s_a[20]=" Rock Shelters of Bhimbetka|Buddhist Monuments at Sanchi|Khajuraho Group of Monuments";
s_a[21]=" Ajanta Caves|Ellora Caves|Elephanta Caves";
s_a[22]=" Tuibuong Tribal Museum | Imphal War Cemetry | Ina Memorial | Manipur State Musuem ";
s_a[23]="  Double Decker Living Root Bridge | Balpakram National Park | Don Bosco Centre for Indigeneous Culture";
s_a[24]=" Mizoram State Museum | Solomon Temple |Tomb of Vanhimailian";
s_a[25]=" Nagaland State Museum | Naga Heritage Village | Kohima War Cemetery ";
s_a[26]=" Odisha State Museum | Tribal Research Institute Museum | Jagannath Temple";
s_a[27]=" French War Memorial | Aurobindo Ashram | Immaculate Conception Cathedral ";
s_a[28]=" Virasat-e-Khalsa | Golden Temple | Bharatpur Fort";
s_a[29]=" Ajmer Sharif Dargah | Hawa Mahal | City Palace, Jaipur";
s_a[30]=" Dubdi Monastery | KirateshwarMahadev Temple | Pemayangste Monastery";
s_a[31]=" Saint George Fort | Chennai Railway Museum | Government Museum, Chennai";
s_a[32]=" Tripura State Museum | Neermahal Water Palace | Bhubaneswari Temple";
s_a[33]=" Agra Fort | Sarnath Museum | Government Museum, Mathura";
s_a[34]=" Pithoragarh fort | Vanasur ka Kila | Badrinath temple ";
s_a[35]=" Victoria Memorial | Indian Museum | Bengal Natural History Museum";


function print_state(state_id){
	// given the id of the <select> tag as function argument, it inserts <option> tags
	var option_str = document.getElementById(state_id);
	option_str.length=0;
	option_str.options[0] = new Option('Select State','');
	option_str.selectedIndex = 0;
	for (var i=0; i<state_arr.length; i++) {
		option_str.options[option_str.length] = new Option(state_arr[i],state_arr[i]);
	}
}

function print_city(city_id, city_index){
	var option_str = document.getElementById(city_id);
	option_str.length=0;	// Fixed by Julian Woods
	option_str.options[0] = new Option('Select Places','');
	option_str.selectedIndex = 0;
	var city_arr = s_a[city_index].split("|");
	for (var i=0; i<city_arr.length; i++) {
		option_str.options[option_str.length] = new Option(city_arr[i],city_arr[i]);
	}
}

const lgn = document.querySelector('.sr1')
lgn.addEventListener("click", display1);
function display1()
{
	e.preventDefault()
    const user = document.getElementById('sts').value
    if(user ===state_arr[1])
	{
		document.getElementById('s1').style.backgroundImage="url('assets/images/am3.jpg')";
	}

}