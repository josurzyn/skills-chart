const skills = [
  {
    name: "HTML",
    rating: "10"
  }, {
    name: "CSS",
    rating: "10"
  }, {
    name: "SCSS/Sass",
    rating: "4"
  }, {
    name: "JavaScript",
    rating: "8"
  }, {
    name: "JQuery",
    rating: "2"
  }, {
    name: "Git",
    rating: "7"
  }, {
    name: "Gulp",
    rating: "5"
  }, {
    name: "REST APIs",
    rating: "7"
  }, {
    name: "PWAs",
    rating: "4"
  }, {
    name: "Angular",
    rating: "1"
  }, {
    name: "React",
    rating: "4"
  }, {
    name: "Jasmine",
    rating: "2"
  }, {
    name: "PHP",
    rating: "1"
  }, {
    name: "Node.js",
    rating: "1"
  }, {
    name: "npm",
    rating: "2"
  }, {
    name: "Responsive Design",
    rating: "7"
  }, {
    name: "Accessibility",
    rating: "5"
  }, {
    name: "UX/UI Design",
    rating: "6"
  }, {
    name: "Adobe XD",
    rating: "5"
  }, {
    name: "Adobe Photoshop",
    rating: "7"
  }, {
    name: "WebP",
    rating: "5"
  }
]

const list = document.getElementsByClassName('skills')[0];

console.log(list);

const showSkills = (skills) => {
  for (let i = 0; i < skills.length; i++){
    console.log(skills[i].name);
    let skill = document.createElement('li');
    let label = document.createElement('p');
    let rating = document.createElement('div');
    rating.classList.add('level');
    label.innerText = skills[i].name;
    list.appendChild(skill);
    skill.appendChild(label);
    skill.appendChild(rating);
  }
  setTimeout( function(){
    rateSkills(ratings, skills);
  }, 1000 );
}

let ratings = document.getElementsByClassName('level');

console.log(ratings);

const rateSkills = (ratings, skills) => {
  for (let i = 0; i < ratings.length; i++){
    ratings[i].style.width = (skills[i].rating * 4) + 'vw';
  }
}
 window.onload = function() {
   showSkills(skills);
 }
