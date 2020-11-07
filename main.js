window.onload = () => {
    let licensePlan = document.querySelectorAll('.form-license');
    let totalSum = document.querySelector('.total-sum div span');
    let selectedPlan = document.querySelector('.selection-license__plan div');

    let select, valueOption = 1, totalSumNum = 0;

    


    for(let i = 0; i < licensePlan.length; i++){
        licensePlan[i].addEventListener('click', 
        function(){
            totalSumNum = `${licensePlan[i].getAttribute('data-price')}`;
            totalSum.innerHTML = `${licensePlan[i].getAttribute('data-price') * valueOption}`;
            selectedPlan.innerHTML = `#${licensePlan[i].getAttribute('data-licenseNum')}`;
        })
    }


    function changeNum() {
        select = document.getElementById("selectId");
        valueOption = select.options[select.selectedIndex].value;
        totalSum.innerHTML = totalSumNum * +valueOption;
    }

    document.getElementById("selectId").addEventListener('change',  function() {changeNum()})
}