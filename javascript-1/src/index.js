// Покупки
const purchases_input = [["a", "b"], ["b", "c"], ["d", "e"]];

// Вывод максимального списка рекомендаций
console.log(maxItemAssociation(purchases_input));



function maxItemAssociation(purchases) {

    // Получаем список уникальных продуктов из списка покупок
    const products = Distinct2D(purchases)

    let result = [];        // результирующий спискок рекомендаций
    let tmp_result = [];    // Временнаый массив, для хранения списка рекомендаций для продукта

    // Для каждого уникального продукта получаем список рекомендаций
    products.forEach(product => {

        // Получаем только те списки покупок , которые содержат текущий продукт
        const purchases_product = purchases.filter(purchase => { return purchase.indexOf(product) > -1 });

        // Получаем уникальные значения продуктов из списка покупок для продукта
        tmp_result = Distinct2D(purchases_product)

        // Если полученный список больше текущего результирующего списка, то обновляем результирующего список рекомендаций        
        if (tmp_result.length > result.length) {
            result = tmp_result;
        }
    });

    // Результат в лексикографическом порядке
    return result.sort();
}

// Вспомогательная функция, возвращающая одномерный массив, содержащий все уникальные значения двумерного массива 
function Distinct2D(input_array2D) {
    // Объединение всех элементов двумерного массива в одномерный
    const output_array = [].concat(...input_array2D);

    // Оставляем только уникальные значения
    const distint_array = [...new Set(output_array)];

    return distint_array;
}

