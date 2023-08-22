let myform = document.getElementById('myform');
myform.addEventListener("submit",
    function getData(e) {
        e.preventDefault()
        s = Number(document.getElementById("salary").value);
        b = Number(document.getElementById("benefits").value);

        let calc_gross = find_gross_salary(s, b)
        document.getElementById("mygross").innerText = calc_gross

        let calc_nhif = find_NHIF(calc_gross)
        document.getElementById("nhif").innerText = calc_nhif
        

        let calc_nssf = find_NSSF(calc_gross)
        document.getElementById("nssf").innerText  = calc_nssf
        
        let calc_nhdf = findNHDF(calc_gross)
        document.getElementById("nhdf").innerText  = calc_nhdf
        

        let calc_total = NSSF_NHDFtotal(calc_nssf, calc_nhdf)
        
        let calc_taxableincome = findtaxable_income(calc_gross, calc_total)
        document.getElementById("taxable_income").innerText  = calc_taxableincome
    
        let calc_payee = findPAYEE(calc_taxableincome, personal_relief = 2400)
        document.getElementById("payee").innerText  = calc_payee
        
        let calc_net_pay = findNetsalary(calc_gross, calc_nhif, calc_nhdf, calc_nssf, calc_payee)
        document.getElementById("netpayee").innerText=calc_net_pay
        alert(calc_net_pay)
    });


//Gross start

function find_gross_salary(basicSalary, benefits) {
    let gross_salary = basicSalary + benefits
    return gross_salary;
}



// function for nhif calculations
function find_NHIF(gross_salary) {
    nhif = 0
    if (gross_salary <= 5999) {
        nhif = 150

    } else if (gross_salary >= 6000 && gross_salary <= 7999) {
        nhif = 300

    } else if (gross_salary >= 8000 && gross_salary <= 11999) {
        nhif = 400

    } else if (gross_salary >= 12000 && gross_salary <= 14999) {
        nhif = 500

    } else if (gross_salary >= 15000 && gross_salary <= 19999) {
        nhif = 600

    } else if (gross_salary >= 20000 && gross_salary <= 24999) {
        nhif = 750

    } else if (gross_salary >= 25000 && gross_salary <= 29999) {
        nhif = 850

    } else if (gross_salary >= 30000 && gross_salary <= 34999) {
        nhif = 900

    } else if (gross_salary >= 35000 && gross_salary <= 39999) {
        nhif = 950

    } else if (gross_salary >= 40000 && gross_salary <= 44999) {
        nhif = 1000

    } else if (gross_salary >= 45000 && gross_salary <= 49999) {
        nhif = 1100

    } else if (gross_salary >= 50000 && gross_salary <= 59999) {
        nhif = 1200

    } else if (gross_salary >= 60000 && gross_salary <= 69999) {
        nhif = 1300

    } else if (gross_salary >= 70000 && gross_salary <= 79999) {
        nhif = 1400

    } else if (gross_salary >= 80000 && gross_salary <= 89999) {
        nhif = 1500

    } else if (gross_salary >= 90000 && gross_salary <= 99999) {
        nhif = 1600

    } else if (gross_salary > 99999) {
        nhif = 1700
    }
    else {
        nhif = 0
    }
    return nhif
}

// finding NSSF
function find_NSSF(gross_salary, rate = 0.06) {
    if (gross_salary > 0 && gross_salary <= 18000) {
        nssf = (gross_salary * rate)
    } else {
        nssf = 18000 * rate
    }
    return nssf
}

// finding NHDF
function findNHDF(gross_salary, amount = 0.03) {
    let nhdf = gross_salary * amount
    return nhdf
}

//finding nssf
function NSSF_NHDFtotal(nssf, nhdf) {
    let total = nssf + nhdf
    return total
}

// finding taxable_income

function findtaxable_income(gross_salary, total) {
    let taxable_income = gross_salary - total
    return taxable_income
}
// function link_taxableincome(){
//     document.getElementById("taxable_income").innerText = findtaxable_income(
//          document.getElementById("mygross").value,
//         document.getElementById("total").value
//       )
// }

// let calcTaxable_income = findtaxable_income(calcGross, calcTotal)

// finding payee

function findPAYEE(taxable_income, personal_relief = 2400) {
    netpayee = 0
    if (taxable_income <= 24000) {
        grosspayee = 24000 * 0.1
        netpayee = grosspayee - personal_relief
    } else if (taxable_income <= 32, 333) {
        grosspayee = ((taxable_income - 24000) * 0.25) + 2400
        netpayee = grosspayee - personal_relief
    } else if (taxable_income <= 500000) {
        grosspayee = ((taxable_income - 32333) * 0.30) + 4483.25
        netpayee = grosspayee - personal_relief
        // }else if ( taxable_income > 500000 && taxable_income <= 800000) {
        //     grosspayee = ((taxable_income - 500000) * 0.325) + 144, 783.35
        //     netpayee = grosspayee - personal_relief
    } else if (taxable_income > 500000) {
        grosspayee = ((taxable_income - 80000) * 0.35) + 4483.25
        netpayee = grosspayee - personal_relief
    } else {
        netpayee = 0
    }
    return netpayee
}

// finding individual's net salary using net_salary = gross_salary - (nhif + nhdf +  nssf + payee)


function findNetsalary(gross_salary, nhif, nhdf, nssf, netpayee) {
    let net_salary = gross_salary - (nhif + nhdf + nssf + netpayee)
    return net_salary
}


// let calcNetsalary = findNetsalary(calcGross, calcNHIF, calcNHDF, calcNSSF, calcPAYEE)
// console.log(find_NHIF())

