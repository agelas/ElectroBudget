// This is used to filter expense types in the expense stack.
// Has to be a string because that's what the .Type field is.
export enum ExpenseType {
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
