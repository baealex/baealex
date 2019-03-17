var chromo =
    [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];
var new_chromo =
    [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];

var evalution = [0, 0, 0, 0, 0];
var evalution_sort = [0, 0, 0, 0, 0];
var select = [0, 0];
var generation = 0;
var mutation = 0.05;

var dominent = prompt("Dominent Genome : ");

for (var i = 0; i < 5; i++) { for (var j = 0; j < 10; j++) { chromo[i][j] = Math.floor(Math.random() * 10); } } generation++;
document.write("Generation " + generation + " : <br>");
for (var i = 0; i < 5; i++) {
    document.write("[" + chromo[i] + "]<br>");
}

while (1) {
    for (var i = 0; i < 5; i++) {
        var m_sum = 0; for (var j = 0; j < 10; j++) {
            if (chromo[i][j] > dominent) {
                m_sum += chromo[i][j] - dominent;
            }
            else {
                m_sum += dominent - chromo[i][j];
            }
        }
        evalution[i] = m_sum;
    }

    var done = false;
    for (var i = 0; i < 5; i++) { if (evalution[i] == 0) { done = true; break; } } if (done) break;
    evalution_sort = evalution.slice(); evalution_sort.sort(function (a, b) { return a - b }); for (var
        i = 0; i < 2; i++) {
        select[i] = evalution.indexOf(evalution_sort[i]); if (select[0] == select[1] && i == 1) {
            select[i] = evalution.indexOf(evalution_sort[i], select[0] + 1);
        }
    } document.write("Evaluation : " + evalution + " < br > Select Chromosome : " + select + " < br > ");

    for (var i = 0; i < 5; i++) {
        for (var j = 0; j < 10; j++) {
            if (Math.random() < mutation) {
                new_chromo[i][j] = Math.floor(Math.random() * 10);
            } else {
                new_chromo[i][j] = chromo[select[Math.floor(Math.random() * 2)]][j];
            }
        }
    }
    chromo = JSON.parse(JSON.stringify(new_chromo)); generation++;
    document.write("Generation " + generation + " : <br>");
    for (var i = 0; i < 5; i++) {
        document.write("[" + chromo[i] + "]<br>");
    }

    if (generation > 1000) {
        break;
    }
}