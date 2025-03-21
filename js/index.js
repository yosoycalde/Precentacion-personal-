document.addEventListener('DOMContentLoaded', function() {
    
    const profileImage = document.querySelector('.imagen');
    if (profileImage) {
        
        profileImage.style.opacity = '0';
        profileImage.style.transform = 'scale(0.8)';
        profileImage.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        
        setTimeout(() => {
            profileImage.style.opacity = '1';
            profileImage.style.transform = 'scale(1)';
            
            setTimeout(() => {
                profileImage.classList.add('pulse-animation');
                
                setTimeout(() => {
                    profileImage.classList.remove('pulse-animation');
                }, 6000);
            }, 1500);
        }, 300);
        
        
        profileImage.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.boxShadow = '0 5px 15px rgba(0,0,0,0.2)';
        });
        
        profileImage.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = '0 2px 4px rgba(0,0,0,0.08)';
        });
    }
    
    
    const sectionHeaders = document.querySelectorAll('.information h3, .sobre-mi h3, .educacion h3, .habilidades h3, .idiomas h3');
    sectionHeaders.forEach((header, index) => {
        header.style.opacity = '0';
        header.style.transform = 'translateY(15px)';
        header.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        
        setTimeout(() => {
            header.style.opacity = '1';
            header.style.transform = 'translateY(0)';
        }, 500 + (index * 150));
    });
    
    
    const links = document.querySelectorAll('.contacto a, .link a');
    links.forEach(link => {
        
        link.style.transition = 'color 0.3s ease, transform 0.3s ease';
        
        link.addEventListener('mouseenter', function() {
            this.style.color = '#ffffff';
            this.style.transform = 'translateX(3px)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.color = '#80ced6';
            this.style.transform = 'translateX(0)';
        });
    });
    
    
    const sections = document.querySelectorAll('.information, .sobre-mi, .educacion, .habilidades, .idiomas');
    sections.forEach((section, index) => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        
        setTimeout(() => {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }, 800 + (index * 200));
    });
    
    
    const nameTitle = document.querySelector('.name h1');
    if (nameTitle) {
        nameTitle.style.opacity = '0';
        nameTitle.style.transform = 'translateY(-15px)';
        nameTitle.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        
        setTimeout(() => {
            nameTitle.style.opacity = '1';
            nameTitle.style.transform = 'translateY(0)';
        }, 400);
    }
    
   
    const skills = document.querySelectorAll('.habilidades p');
    if (skills.length > 0) {
       
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    highlightSkills(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        skills.forEach(skill => {
            observer.observe(skill);
        });
    }
    
    
    function highlightSkills(skillsElement) {
        const skillText = skillsElement.textContent;
        const skills = skillText.split(',').map(skill => skill.trim());
        
        
        skillsElement.textContent = '';
        
        
        skills.forEach((skill, index) => {
            const skillSpan = document.createElement('span');
            skillSpan.textContent = skill;
            skillSpan.style.display = 'inline-block';
            skillSpan.style.opacity = '0';
            skillSpan.style.transform = 'scale(0.9)';
            skillSpan.style.transition = 'opacity 0.4s ease, transform 0.4s ease, color 0.4s ease';
            skillSpan.style.margin = '0 5px';
            
            
            if (index < skills.length - 1) {
                skillSpan.textContent += ', ';
            }
            
            skillsElement.appendChild(skillSpan);
            
            
            setTimeout(() => {
                skillSpan.style.opacity = '1';
                skillSpan.style.transform = 'scale(1)';
            }, 300 + (index * 150));
            
           
            skillSpan.addEventListener('mouseenter', function() {
                this.style.color = '#002b47';
                this.style.transform = 'scale(1.05)';
            });
            
            skillSpan.addEventListener('mouseleave', function() {
                this.style.color = '';
                this.style.transform = 'scale(1)';
            });
        });
    }
    
    const columnasIzquierda = document.querySelector('.columna-izquierda');
    const columnasDerecha = document.querySelector('.columna-derecha');
    
    if (columnasIzquierda && columnasDerecha) {
        columnasIzquierda.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
        columnasDerecha.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
        
        columnasIzquierda.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 8px 15px rgba(0,0,0,0.15)';
        });
        
        columnasIzquierda.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '1px 1px 4px rgba(0,0,0,0.12)';
        });
        
        columnasDerecha.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 8px 15px rgba(0,0,0,0.1)';
        });
        
        columnasDerecha.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 1px 3px rgba(0,0,0,0.05)';
        });
    }
});