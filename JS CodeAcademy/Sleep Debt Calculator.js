//Determining how many hours of sleep you get per a day
const getSleepHours = day => {
    switch (day) {
      case 'Mon':
        return 8;
        break;
      case 'Tue':
        return 7;
        break;
      case 'Wed':
        return 8;
        break;
      case 'Thu':
        return 8;
        break;
      case 'Fri':
        return 6;
        break;
      case 'Sat':
        return 8;
        break;
      case 'Sun':
        return 8;
        break;
      default:
        return 'You need to write a day you idiot!'    
    } 
};

//Determining the total sleep hours
const getActualSleepHours = () => 
    getSleepHours('Mon')+
    getSleepHours('Tue')+
    getSleepHours('Wed')+
    getSleepHours('Thu')+
    getSleepHours('Fri')+
    getSleepHours('Sat')+
    getSleepHours('Sun');

const getIdealSleepHours = () => {
    const idealHours = 8;
    return idealHours * 7;
  };

//Creating Sleep Debt Calculator
const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
  
      if (actualSleepHours===idealSleepHours) {
          console.log('Perfect amount of sleep');
      } else if (actualSleepHours>idealSleepHours) {
          console.log('Sleeping way to much');
      } else if (actualSleepHours<idealSleepHours) {
          console.log('Go get some rest');
      }
  };
  
  calculateSleepDebt();
