enum LOCATION {
    EUA = "EUA",
    BRAZIL = "BRAZIL"
  }
  
  enum NACIONALITY {
    BRAZILIAN = "BRAZILIAN",
    AMERICAN = "AMERICAN"
  }
  
  interface Personal {
    name: string;
    age: number;
    nacionality: NACIONALITY;
  }
  
  interface Casino {
    name: string;
    location: LOCATION;
  }