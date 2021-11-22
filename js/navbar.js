export default class {
    constructor(navigation = '.Navigation') {
        this.navigation = document.querySelector(navigation);
        this.navToggleBtn = this.navigation.querySelector('.nav-toggle');
        (this.navToggleBtn)
            ? this.SetDataCollapseOnNavToggle()
            : console.log('MaxUp Warning : nav-toggle dose not exist!');

        window.addEventListener('resize', this.SetDataCollapseOnNavToggle.bind(this));

        this.navToggleBtn.addEventListener('click', this.ToggleNav.bind(this));
    }
    SetDataCollapseOnNavToggle() {
        this.navToggleBtn.setAttribute('data-collapse', (window.innerWidth <= 800));
    }
    ToggleNav() {
        this.navigation.classList.toggle('navIsActive')
    }
}