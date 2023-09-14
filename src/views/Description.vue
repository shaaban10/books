<script setup>
</script>

<template>
  <figure >
    <img class="card-img-top" src="https://images.pexels.com/photos/51342/books-education-school-literature-51342.jpeg?cs=srgb&dl=book-stack-books-education-51342.jpg&fm=jpg" alt="..." />
  </figure>
   <div class="container px-4 px-lg-5 mt-5">
      
                <h1 class="fw-bolder">The Another One</h1>
                <H2>$30.00</H2>
           
          </div>
<textarea type="text" size="50" name="txtarea" maxlength="1000000" style="font-family: Arial;font-size: 12pt;">
  Title: The Another One

Author: Jane Smith

Genre: Mystery Thriller

Description:

In the heart of the bustling city of New York, a series of enigmatic and unsettling events begin to unfold. "The Another One" is a gripping mystery thriller that will keep you on the edge of your seat until the very last page.

Detective Sarah Walker, known for her sharp intuition and unwavering determination, finds herself immersed in a complex case that defies explanation. A string of seemingly unrelated incidents - mysterious disappearances, cryptic messages, and unexplained phenomena - all point to a hidden web of secrets lurking beneath the city's surface.

As Sarah delves deeper into the investigation, she discovers a trail of clues that lead her to a shadowy world of clandestine organizations, ancient conspiracies, and long-buried family secrets. Each revelation brings her closer to unraveling the truth, but it also puts her own life in grave danger.

With time running out and the stakes higher than ever, Sarah must navigate a treacherous path of deception and betrayal to uncover "The Another One." But as she gets closer to the heart of the mystery, she realizes that some secrets are best left buried.

Prepare yourself for a rollercoaster ride of suspense, unexpected twists, and a thrilling conclusion that will leave you breathless. "The Another One" is a must-read for fans of heart-pounding mysteries and intricate puzzles. Are you ready to uncover the truth?
</textarea>
<H3>you want to modify it</H3>

<RouterLink to="/admin" class="btn btn-outline-dark mt-auto"><button class="button-89" role="button">Press Here</button></RouterLink>


</template>

<style scoped>
textarea {
  width: 50%;
  height: 50vh;
}
img{
  width:1500px;
  height:900px;
  position: relative;
}
.button-89 {
  --b: 3px;   /* border thickness */
  --s: .45em; /* size of the corner */
  --color: #373B44;
  
  padding: calc(.5em + var(--s)) calc(.9em + var(--s));
  color: var(--color);
  --_p: var(--s);
  background:
    conic-gradient(from 90deg at var(--b) var(--b),#0000 90deg,var(--color) 0)
    var(--_p) var(--_p)/calc(100% - var(--b) - 2*var(--_p)) calc(100% - var(--b) - 2*var(--_p));
  transition: .3s linear, color 0s, background-color 0s;
  outline: var(--b) solid #0000;
  outline-offset: .6em;
  font-size: 16px;

  border: 0;

  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.button-89:hover,
.button-89:focus-visible{
  --_p: 0px;
  outline-color: var(--color);
  outline-offset: .05em;
}

.button-89:active {
  background: var(--color);
  color: #fff;
}
</style>
