
        
        const images = document.querySelectorAll('.image');

        images.forEach(image => {
            image.addEventListener('click', function() {
               
                if (this.classList.contains('big')) {
                    this.classList.remove('big');
                } else {
                    
                    images.forEach(img => img.classList.remove('big'));
                    
                    this.classList.add('big');
                }
            });
        });
    