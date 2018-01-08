package com.prz.edu.checkyourspend.webui.expenditure.model;

public enum ChartRange {
    LAST_10(0),
    LAST_WEEK(-7),
    LAST_MONTH(-30),
    LAST_YEAR(-365),
    ALL(1);

    private final int number;

    private ChartRange(int val) {
        this.number = val;
    }

    public int getValue() {
        return number;
    }
}
