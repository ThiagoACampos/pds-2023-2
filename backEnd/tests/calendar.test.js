const { translateTasks, getTimeHHMMFormat, mapToDaysOfTheWeek, addPredictedDate } = require('../businessCases/calendar');

describe('translateTasks', () => {
    test('translates tasks correctly', () => {
        // Arrange
        const tasksInOrder = [
            {taskName: 'Task 1', description: 'Description 1', workload: 3},
            {taskName: 'Task 2', description: 'Description 2', workload: 2},
        ];

        // Act
        const result = translateTasks(tasksInOrder);

        // Assert
        expect(result).toEqual([[], [], [], [], [], [{
                "dateEnd": "12:00",
                "dateStart": "9:00",
                "detail": "Description 1",
                "title": "Task 1"
            }, {"dateEnd": "14:00", "dateStart": "12:00", "detail": "Description 2", "title": "Task 2"}], []]
        );
    });
});

describe('getTimeHHMMFormat', () => {
    test('formats hour correctly', () => {
        // Arrange
        const hour = 8;

        // Act
        const result = getTimeHHMMFormat(hour);

        // Assert
        expect(result).toBe('8:00');
    });

    test('handles single-digit hour', () => {
        // Arrange
        const hour = 2;

        // Act
        const result = getTimeHHMMFormat(hour);

        // Assert
        expect(result).toBe('2:00');
    });
});

describe('mapToDaysOfTheWeek', () => {
    test('maps tasks to days correctly', () => {

        // Arrange
        const tasksOfTheWeek = [
            { dayWeekStart: 0, taskDetais: { dateStart: '9:00', dateEnd: '10:00', title: 'Task 1', detail: 'Description 1' } },
            { dayWeekStart: 1, taskDetais: { dateStart: '10:00', dateEnd: '11:00', title: 'Task 2', detail: 'Description 2' } },
        ];

        // Act
        const result = mapToDaysOfTheWeek(tasksOfTheWeek);

        // Assert
        expect(result).toEqual([
            [{ dateStart: '9:00', dateEnd: '10:00', title: 'Task 1', detail: 'Description 1' }],
            [{ dateStart: '10:00', dateEnd: '11:00', title: 'Task 2', detail: 'Description 2' }],
            [], [], [], [], []
        ]);
    });
});

describe('addPredictedDate', () => {
    test('adds predicted dates correctly', () => {
        // Arrange
        const task = {
            workload: 2, // 2 hours
        };
        const startDate = new Date('2023-11-25T08:00:00');

        // Act
        addPredictedDate(task, startDate);

        // Assert
        expect(task.startDate).toEqual(startDate);
        expect(task.endDate).toEqual(new Date('2023-11-25T10:00:00'));
    });
});