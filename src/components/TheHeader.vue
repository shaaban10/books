<template>
  <header>
    <div class="container header-container">
      <div class="header-content">
        <h1 class="header-title">Store <span>Book</span></h1>
        <p class="header-subtitle">Your modern bookstore</p>
      </div>
    </div>
  </header>
</template>
<style scoped>
header {
  background-color: #34495e; /* Dark background color */
  color: #fff; /* Text color */
  padding: 20px 0; /* Padding for top and bottom */
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1); /* Box shadow for a subtle depth effect */
}

.header-container {
  display: flex;
  justify-content: center; /* Center horizontally */
  align-items: center;
  height: 100%; /* Make the header fill the vertical space */
}

.header-content {
  text-align: center; /* Center the content inside the header */
}

.header-title {
  font-size: 2rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.header-title span {
  color: #e74c3c; /* Accent color */
}

.header-subtitle {
  font-size: 1.2rem;
  opacity: 0.7;
}
</style>
