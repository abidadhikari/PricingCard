const toggleBtn = document.getElementById("toggleBtn");
const roundBtn = document.getElementById("roundBtn");
const features = document.getElementById("features");
const monthlyorannually = document.getElementById("monthlyorannually");
const price = document.getElementById("price");
const permonth = document.getElementById("permonth");

const teamNumbers = document.querySelectorAll(".teamnumber");

let isMonthly = true;
const monthPrice = 26;
const annualPrice = 19;

const monthlyFeatures = [
  "Learn from unlimited courses with no extra cost",
  "Learning Paths",
  "Sharable Certificates",
  "Sample resumes and cover letters",
  "Interview preparation materials",
  "Access to Agile Wiki",
  "Certification Preparation Assessments",
];
monthlyFeatures.forEach((e) => {
  const temp = `
    <div class="features_list">
    <div class="tick"><i class="fa fa-check"></i></div>
    
    <div class="flist_data">${e}</div>
</div>
    `;
  features.insertAdjacentHTML("beforeend", temp);
});
const switchContent = () => {
  monthlyorannually.innerText = isMonthly ? "Monthly" : "Annual";
  price.innerText = isMonthly ? monthPrice : annualPrice;
  permonth.innerText = isMonthly
    ? "Per Month"
    : `Per Month Paid Yearly (Total $${annualPrice * 12})`;
};

const toggle = () => {
  isMonthly = isMonthly ? false : true;
  switchContent();
};

toggleBtn.addEventListener("click", () => {
  roundBtn.classList.toggle("annualActive");
  toggle();
});


const removeTeamHighLight=(i)=>{
  teamNumbers.forEach((e, index) => {
    if(index==i)
      return;
    else
      e.classList.remove("team_number_active")
  });
}

teamNumbers.forEach((e, i) => {
  e.addEventListener("click", (element) => {
    e.classList.add("team_number_active");
    const num=+element.target.dataset.teamno;
    console.log(num,typeof num)
    removeTeamHighLight(i);
  });
});

window.addEventListener("load", () => {
  switchContent();
});
