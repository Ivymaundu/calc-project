let myform = document.getElementById('myform');
myform.addEventListener("submit",
    function getData(e) {
        e.preventDefault() 
        s = document.getElementById("salary").value;
        b = document.getElementById("benefits").value;
        // alert(s)
        if (s.length == 0 || b.length == 0) {
            document.getElementById("error").innerText = "Enter value"
        } else {
            document.getElementById("mygross").innerText = toString(find_gross_salary(basicSalary, Benefits))
        }
    });

// let gs = find_gross_salary(s,b);
// document.getElementById('')


function  find_gross_salary(basicSalary, Benefits){

    let gross_salary = basicSalary + Benefits
    return gross_salary;
}


function link_gross(){
    document.getElementById("mygross").innerText = find_gross_salary(
    Number(document.getElementById("salary").value),
    Number(document.getElementById("benefits").value)
    )
}

// function for nhif calculations
function find_NHIF(gross_salary) {
    let nhif = 0
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

    } else {
        nhif = 1700
    }
    return nhif
}
function link_nhif() {
    document.getElementById("nhif").innerText = find_NHIF(
      document.getElementById("mygross").value
    )
  }


// finding NSSF
function find_NSSF(gross_salary, rate = 0.06) {
    nssf = 0
    if (gross_salary > 0 && gross_salary <= 18000) {
        nssf = (gross_salary * rate)
    } else {
        nssf = 18000 * rate
    }
    return nssf
}
function link_nssf(){
    document.getElementById("nssf").innerText = find_NSSF(
        document.getElementById("mygross").value
      )
}

// finding NHDF
function findNHDF(gross_salary, amount = 0.03) {
    let nhdf = gross_salary * amount
    return nhdf
}
function link_nhdf(){
    document.getElementById("nhdf").innerText = findNHDF(
        document.getElementById("mygross").value
      )
}

//finding nssf
function NSSF_NHDFtotal(nssf, nhdf) {
    let total = nssf + nhdf
    return total
}
function link_nssf_nhdf_total(){
    document.getElementById("total").innerText = NSSF_NHDFtotal(
        Number( document.getElementById("nssf").value),
        Number(document.getElementById("nhdf").value)
      )
    }
// finding taxable_income

function findtaxable_income(gross_salary, total) {
    let taxable_income = gross_salary - total
    return taxable_income
}
function link_taxableincome(){
    document.getElementById("taxable_income").innerText = findtaxable_income(
         document.getElementById("mygross").value,
        document.getElementById("total").value
      )
}

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
// storing the function findPAYEE in a variable
function link_payee(){
    document.getElementById("payee").innerText = findPAYEE(
        document.getElementById("taxable_income").value
      )
}


// finding individual's net salary using net_salary = gross_salary - (nhif + nhdf +  nssf + payee)


function findNetsalary(gross_salary, nhif, nhdf, nssf, netpayee) {
    let net_salary = gross_salary - (nhif + nhdf + nssf + netpayee)
    return net_salary
}
function link_netpay(){
    document.getElementById("netpayee").innerText = findNetsalary(
        Number(document.getElementById("mygross").innerText),
        Number(document.getElementById("nhif").innerText),
        Number(document.getElementById("nhdf").innerText),
        Number(document.getElementById("nssf").innerText),
        Number(document.getElementById("payee").innerText)
      )
}

// let calcNetsalary = findNetsalary(calcGross, calcNHIF, calcNHDF, calcNSSF, calcPAYEE)