import THREE from "n3d-threejs"

class Framework {
  constructor() {
    this.rdrr = new THREE.WebGLRenderer({alpha : true});
    this.rdrr.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(this.rdrr.domElement);

    //객체 생성

  }

  update(dt) {
    //객체 업데이트 및 랜더링

  }
};


export default Framework ;
