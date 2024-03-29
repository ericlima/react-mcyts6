import React from 'react';
import {Chart} from 'primereact/chart';

export default () => {  
  const data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'My First dataset',
                    backgroundColor: '#42A5F5',
                    data: [65, 59, 80, 81, 56, 55, 40]
                },
                {
                    label: 'My Second dataset',
                    backgroundColor: '#9CCC65',
                    data: [28, 48, 40, 19, 86, 27, 90]
                }
            ]    
        };
  return  
    <div className="content-section implementation">
        
      <Chart type="bar" data={data} />
        
      <Chart type="horizontalBar" data={data} />

    </div>
};
