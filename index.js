const DummyData1 = [
{   id:1,
    title:'Get empowered to make meaningful life changes',
    description:'Our experienced coaches will provide individualised support, helping you identify your unique strengths and areas for improvement through proven methodologies',
    point1:'Tailored Approach',    
    point2:'Goal-Oriented Sessions',    
    point3:'Flexible and Adaptive',    
    point4:'Empowering and Motivating',
    image:'/images/dataimg1.png'},

{   id:2,
    title:'Discover the power of a well crafted morning routine',
    description:'From mindfulness practices and gratitude exercises to goal setting and productivity strategies. Learn how to optimise your mornings that sets the tone for an exceptional day.',
    point1:'Consistency and Discipline',    
    point2:'Effective Time Management',    
    point3:'Mindfulness and Meditation',    
    point4:'Productivity and Goal Setting',
    image:'/images/dataimg2.png'},

{   id:3,
    title:'Learn how to prioritize your health and well-being',
    description:'Our coaches will provide insights on cultivating a healthy lifestyle and developing habits that support your physical, mental, and emotional well-being.',
    point1:'Balanced Lifestyle',    
    point2:'Self-Care',    
    point3:'Social Connections',    
    point4:'Mindfulness',
    image:'/images/dataimg3.png'},

{   id:4,
    title:'Get equipped with tools to achieve financial freedom',
    description:'From investment strategies to entrepreneurial endeavors, explore strategies for building wealth, managing your finances, and creating a mindset of abundance.',
    point1:'Financial Education',    
    point2:'Smart Saving and Investing',    
    point3:'Diversified Portfolio',    
    point4:'Long-term Perspective',
    image:'/images/dataimg4.png'},

{   id:5,
    title:'Develop skills and mindset to excel in your career',
    description:'Learn effective communication, leadership and time management techniques that will help you thrive in the workplace and unlock new opportunities for professional growth.',
    point1:'Skill Development',    
    point2:'Networking',    
    point3:'Goal Setting',    
    point4:'Continuous Learning',
    image:'/images/dataimg5.png'},

{   id:6,
    title:'Discover secrets to cultivate meaningful relationships',
    description:'Our coaches will provide guidance on effective communication, conflict resolution, and building strong connections that contribute to a fulfilling and harmonious life.',
    point1:'Communication',    
    point2:'Empathy',    
    point3:'Quality Time',    
    point4:'Appreciation',
    image:'/images/dataimg6.png'},
]




document.addEventListener('DOMContentLoaded', function() {
    const cardContainer = document.getElementById('cardContainer');
  
    for (const dataItem of DummyData1) {
      const card = document.createElement('div');
  
      card.innerHTML = `
      <div  style="background-color: rgb(247, 226, 164);" class="h-auto w-full border border-black rounded-3xl mb-8 text-center p-8">
      <div  class="flex w-full h-full">
       <div  class="w-[61%] p-2 font-Montserrat  ">
        <h1 class="lg:text-3xl md:text-3xl text-xl w-full text-left font-bold text-black font-Montserrat tracking-wide">${dataItem.title}</h1>
        <h1 class="text-left text-black py-5">${dataItem.description}</h1>
        <h1 class="text-left py-2 font-semibold">✔️ ${dataItem.point1}</h1>
        <h1 class="text-left py-2 font-semibold">✔️ ${dataItem.point3}</h1>
        <h1 class="text-left py-2 font-semibold">✔️ ${dataItem.point2}</h1>
        <h1 class="text-left py-2 font-semibold">✔️ ${dataItem.point4}</h1>
      </div>
       <div class="w-[39%] p-2 "><img class="w-[100%] rounded-2xl" src="${dataItem.image}" /></div>
      </div>
      </div>
      `;
  
      cardContainer.appendChild(card);
    }
  });
  
  const buttons = document.querySelectorAll('.button');
  const cardContainer = document.getElementById('cardContainer');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const index = button.getAttribute('data-index');
      reorderCards(index);
      activateButton(button);
    });
  });

  function reorderCards(index) {
    const cards = document.querySelectorAll('.card');
    const cardArray = Array.from(cards);
    cardArray.sort((a, b) => a.dataset.index - b.dataset.index);
    cardArray.forEach(card => cardContainer.appendChild(card));
  }

  function activateButton(clickedButton) {
    buttons.forEach(button => {
      button.classList.remove('active-button');
    });
    clickedButton.classList.add('active-button');
  }
