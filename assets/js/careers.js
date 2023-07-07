document.addEventListener('DOMContentLoaded', function() {
    // Initial call to performSearch with empty values
    performSearch('', '');
    
    // Attach click event listener to the search button
    document.getElementById('search-btn').addEventListener('click', function() {
      var selectedJobRole = document.getElementById('job-role').value;
      var selectedLocation = document.getElementById('location').value;
      
      // Perform search based on selected job role and location
      performSearch(selectedJobRole, selectedLocation);
    });
  });
  

  function performSearch(jobRole, location) {
    
    var jobListings = [
        { role: 'Software-Engineer', type: 'Full-time', location: 'San-Francisco', description: 'We are seeking a skilled Software Engineer to join our dynamic development team. The ideal candidate should have experience in developing robust and scalable software solutions using modern programming languages and frameworks. Responsibilities include designing and implementing software applications, troubleshooting and debugging code, and collaborating with cross-functional teams to deliver high-quality software products.' },
    
        { role: 'Data-Scientist', type: 'Part-time', location: 'New-York', description: 'We are looking for a talented Data Scientist to join our data analytics team. The successful candidate will work on cutting-edge projects, leveraging advanced statistical and machine learning techniques to extract insights from large datasets. Responsibilities include data preprocessing, model development, and presenting findings to stakeholders. Strong analytical skills and proficiency in programming languages such as Python and R are required.' },
    
        { role: 'Product-Manager', type: 'Full-time', location: 'London', description: 'We are hiring a skilled Product Manager to drive the development and launch of our innovative products. The role involves defining product vision, conducting market research, gathering user feedback, and collaborating with cross-functional teams to deliver successful products. The ideal candidate should have a strong understanding of the product development lifecycle, excellent communication skills, and a passion for creating exceptional user experiences.' },

        { role: 'Software-Engineer', type: 'Part-time', location: 'New-York', description: 'We are seeking a skilled Software Engineer to join our dynamic development team. The ideal candidate should have experience in developing robust and scalable software solutions using modern programming languages and frameworks. Responsibilities include designing and implementing software applications, troubleshooting and debugging code, and collaborating with cross-functional teams to deliver high-quality software products' },
    
        { role: 'Data-Scientist', type: 'Full-time', location: 'London', description: 'We are looking for a talented Data Scientist to join our data analytics team. The successful candidate will work on cutting-edge projects, leveraging advanced statistical and machine learning techniques to extract insights from large datasets. Responsibilities include data preprocessing, model development, and presenting findings to stakeholders. Strong analytical skills and proficiency in programming languages such as Python and R are required.' },
    
        { role: 'Product-Manager', type: 'Part-time', location: 'San-Francisco', description: 'We are hiring a skilled Product Manager to drive the development and launch of our innovative products. The role involves defining product vision, conducting market research, gathering user feedback, and collaborating with cross-functional teams to deliver successful products. The ideal candidate should have a strong understanding of the product development lifecycle, excellent communication skills, and a passion for creating exceptional user experiences.' },

        { role: 'Software-Engineer', type: 'Part-time', location: 'London', description: 'We are seeking a skilled Software Engineer to join our dynamic development team. The ideal candidate should have experience in developing robust and scalable software solutions using modern programming languages and frameworks. Responsibilities include designing and implementing software applications, troubleshooting and debugging code, and collaborating with cross-functional teams to deliver high-quality software products' },

        { role: 'Data-Scientist', type: 'Part-time', location: 'San-Francisco', description: 'We are looking for a talented Data Scientist to join our data analytics team. The successful candidate will work on cutting-edge projects, leveraging advanced statistical and machine learning techniques to extract insights from large datasets. Responsibilities include data preprocessing, model development, and presenting findings to stakeholders. Strong analytical skills and proficiency in programming languages such as Python and R are required.' },

        { role: 'Product-Manager', type: 'Part-time', location: 'New-York', description: 'We are hiring a skilled Product Manager to drive the development and launch of our innovative products. The role involves defining product vision, conducting market research, gathering user feedback, and collaborating with cross-functional teams to deliver successful products. The ideal candidate should have a strong understanding of the product development lifecycle, excellent communication skills, and a passion for creating exceptional user experiences.' },
      ];
  
    // Convert job role and location to lowercase for case-insensitive comparison
    var searchRole = jobRole.toLowerCase();
    var searchLocation = location.toLowerCase();
  
    // Filter job listings based on selected job role and location
    var filteredJobListings = jobListings.filter(function(jobListing) {
      var listingRole = jobListing.role.toLowerCase();
      var listingLocation = jobListing.location.toLowerCase();
  
      if (jobRole && location) {
        return listingRole === searchRole && listingLocation === searchLocation;
      } else if (jobRole) {
        return listingRole === searchRole;
      } else if (location) {
        return listingLocation === searchLocation;
      } else {
        return true;
      }
    });
  
    // Generate HTML for filtered job listings
    var jobListingsHTML = '';
    for (var i = 0; i < filteredJobListings.length; i++) {
      var jobListing = filteredJobListings[i];
      jobListingsHTML += `
        <div class="job-card">
          <h2>${jobListing.role}</h2>
          <p class="job-type">Role : ${jobListing.type}</p>
          <p class="location">Location : ${jobListing.location}</p>
          <p>${jobListing.description}</p>
          <button class="btn btn-primary">Apply Now</button>
        </div>
      `;
    }
  
    // Update the job listings section with generated HTML
    document.getElementById('job-listings').innerHTML = jobListingsHTML;
  }
  