<template>
    <div class="container-xxl flex-grow-1 container-p-y">
        <h4 class="py-3 mb-4">
            <span class="text-muted fw-light">Dashboard /</span> User Management
        </h4>

        <!-- Basic Bootstrap Table -->
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">

                    </div>
                    <div class="card-body">
                        <div class="table-responsive">
                            <table class="table table-hover table-bordered table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">First</th>
                                        <th scope="col">Last</th>
                                        <th scope="col">Handle</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <!-- <div class="card">
            <div class="card-header border-bottom">
                <h5 class="card-title mb-3">Search Filter</h5>
                <div class="d-flex justify-content-between align-items-center row pb-2 gap-3 gap-md-0">
                    <div class="col-md-4 user_role"></div>
                    <div class="col-md-4 user_plan"></div>
                    <div class="col-md-4 user_status"></div>
                </div>
            </div>
            <div class="card-datatable table-responsive">
                <div id="DataTables_Table_0_wrapper" class="dataTables_wrapper dt-bootstrap5 no-footer">
                    <div class="row me-2">
                        <div class="col-md-2">
                            <div class="me-3">
                                <div class="dataTables_length" id="DataTables_Table_0_length">
                                    <label>
                                        <select name="DataTables_Table_0_length" aria-controls="DataTables_Table_0" class="form-select">
                                            <option value="10">10</option>
                                            <option value="25">25</option>
                                            <option value="50">50</option>
                                            <option value="100">100</option>
                                        </select>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-10">
                            <div class="dt-action-buttons text-xl-end text-lg-start text-md-end text-start d-flex align-items-center justify-content-end flex-md-row flex-column mb-3 mb-md-0">
                                <div id="DataTables_Table_0_filter" class="dataTables_filter">
                                    <label><input type="search" class="form-control" placeholder="Search.." aria-controls="DataTables_Table_0" /></label>
                                </div>
                                <div class="dt-buttons">
                                    <button
                                        class="dt-button buttons-collection dropdown-toggle btn btn-label-secondary mx-3 waves-effect waves-light"
                                        tabindex="0"
                                        aria-controls="DataTables_Table_0"
                                        type="button"
                                        aria-haspopup="dialog"
                                        aria-expanded="false"
                                    >
                                        <span><i class="ti ti-screen-share me-1 ti-xs"></i>Export</span><span class="dt-down-arrow">▼</span>
                                    </button>
                                    <button class="dt-button add-new btn btn-primary waves-effect waves-light" tabindex="0" aria-controls="DataTables_Table_0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasAddUser">
                                        <span><i class="ti ti-plus me-0 me-sm-1 ti-xs"></i><span class="d-none d-sm-inline-block">Add New User</span></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <table class="datatables-users table dataTable no-footer dtr-column" id="DataTables_Table_0" aria-describedby="DataTables_Table_0_info">
                        <thead class="border-top">
                            <tr>
                                <th class="control sorting_disabled dtr-hidden" rowspan="1" colspan="1" style="width: 53.0625px; display: none;" aria-label=""></th>
                                <th class="sorting sorting_desc" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" style="width: 132.969px;" aria-label="User: activate to sort column ascending" aria-sort="descending">User</th>

                                <th class="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" style="width: 130.797px;" aria-label="Role: activate to sort column ascending">Role</th>

                                <th class="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" style="width: 133.453px;" aria-label="Plan: activate to sort column ascending">Plan</th>

                                <th class="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" style="width: 167.078px;" aria-label="Status: activate to sort column ascending">Status</th>

                                <th class="sorting_disabled" rowspan="1" colspan="1" style="width: 175.766px;" aria-label="Actions">Actions</th>
                            </tr>
                        </thead>
                        <tbody class="table-border-bottom-0">
                            <tr>
                                <td><i class="ti ti-brand-angular ti-lg text-danger me-3"></i> <span class="fw-medium">Angular Project</span></td>
                                <td>Albert Cook</td>
                                <td>
                                    <ul class="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" class="avatar avatar-xs pull-up" title="Lilian Fuller">
                                            <img src="contents/backend/assets/img/avatars/5.png" alt="Avatar" class="rounded-circle">
                                        </li>
                                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" class="avatar avatar-xs pull-up" title="Sophia Wilkerson">
                                            <img src="contents/backend/assets/img/avatars/6.png" alt="Avatar" class="rounded-circle">
                                        </li>
                                        <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" class="avatar avatar-xs pull-up" title="Christina Parker">
                                            <img src="contents/backend/assets/img/avatars/7.png" alt="Avatar" class="rounded-circle">
                                        </li>
                                    </ul>
                                </td>
                                <td><span class="badge bg-label-primary me-1">Active</span></td>
                                <td>
                                    <div class="dropdown">
                                    <button type="button" class="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown"><i class="ti ti-dots-vertical"></i></button>
                                    <div class="dropdown-menu">
                                        <a class="dropdown-item" href="javascript:void(0);"><i class="ti ti-pencil me-1"></i> Edit</a>
                                        <a class="dropdown-item" href="javascript:void(0);"><i class="ti ti-trash me-1"></i> Delete</a>
                                    </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="row mx-2">
                        <div class="col-sm-12 col-md-6"><div class="dataTables_info" id="DataTables_Table_0_info" role="status" aria-live="polite">Showing 0 to 0 of 0 entries</div></div>
                        <div class="col-sm-12 col-md-6">
                            <div class="dataTables_paginate paging_simple_numbers" id="DataTables_Table_0_paginate">
                                <ul class="pagination">
                                    <li class="paginate_button page-item previous disabled" id="DataTables_Table_0_previous">
                                        <a aria-controls="DataTables_Table_0" aria-disabled="true" role="link" data-dt-idx="previous" tabindex="0" class="page-link">Previous</a>
                                    </li>
                                    <li class="paginate_button page-item next disabled" id="DataTables_Table_0_next">
                                        <a aria-controls="DataTables_Table_0" aria-disabled="true" role="link" data-dt-idx="next" tabindex="0" class="page-link">Next</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> -->
        <!--/ Basic Bootstrap Table -->

    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
