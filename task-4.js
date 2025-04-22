const salary = {
    Vika: 2500,
    Vova: 3000,
    Artem:8000,
    Guga: 700,
}
const countTotalSalary = (employees) => {
    let allSalary = 0;
    for (const oneSalary of Object.values(salary)) {
            allSalary += oneSalary;      
        }
        console.log(`Вся зп составляет ${allSalary}`);

}
countTotalSalary(salary);