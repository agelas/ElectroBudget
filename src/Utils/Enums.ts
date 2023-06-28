export enum ExpenseInputType {
    Essential = "Essential",
    NonEssential = "NonEssential",
}

// The order needs to be this way because the enum values
// are used as indexes for some reason idk why I did that.
// Used in NonessentialDisplays and EssentialDisplays.
export enum Categories {
    Essential,
    NonEssential,
    Savings,
    None,
}
