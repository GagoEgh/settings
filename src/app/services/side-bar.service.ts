
export class SideBarService {
  private sideBarAcitve = true;

  public getSideBar(): boolean {
    return this.sideBarAcitve
  }

  public setSideBar(bool: boolean) {
    this.sideBarAcitve = bool
  }

}
