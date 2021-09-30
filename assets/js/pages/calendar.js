!(function (l) {
    "use strict";
    function e() {
        (this.$body = l("body")),
            (this.$modal = new bootstrap.Modal(document.getElementById("event-modal"), { backdrop: "static" })),
            (this.$calendar = l("#calendar")),
            (this.$formEvent = l("#form-event")),
            (this.$btnNewEvent = l("#btn-new-event")),
            (this.$btnDeleteEvent = l("#btn-delete-event")),
            (this.$btnSaveEvent = l("#btn-save-event")),
            (this.$modalTitle = l("#modal-title")),
            (this.$calendarObj = null),
            (this.$selectedEvent = null),
            (this.$newEventData = null);
    }
    (e.prototype.onEventClick = function (e) {
        this.$formEvent[0].reset(),
            this.$formEvent.removeClass("was-validated"),
            (this.$newEventData = null),
            this.$btnDeleteEvent.show(),
            this.$modalTitle.text("Edit Event"),
            this.$modal.show(),
            (this.$selectedEvent = e.event),
            l("#event-title").val(this.$selectedEvent.title),
            l("#first_name").val(this.$selectedEvent.classNames[0]);
    }),
        (e.prototype.onSelect = function (e) {
            this.$formEvent[0].reset(),
                this.$formEvent.removeClass("was-validated"),
                (this.$selectedEvent = null),
                (this.$newEventData = e),
                this.$btnDeleteEvent.hide(),
                this.$modalTitle.text("Add New Event"),
                this.$modal.show(),
                this.$calendarObj.unselect();
        }),
        (e.prototype.init = function () {
            var e = new Date(l.now());
            new FullCalendar.Draggable(document.getElementById("external-events"), {
                itemSelector: ".external-event",
                eventData: function (e) {
                    return { title: e.innerText, className: l(e).data("class") };
                },
            });

            var t = [
                    {
                        img:"http://localhost:63342/Affordable%20Pest%20Control/assets/images/logo/Bitmap-profile.png",
                        title: "Meeting with Mr. Shreyu",
                        start: new Date(l.now() + 158e6),
                        end: new Date(l.now() + 338e6),
                        className: "bg-success"
                    },
                    { img:"http://localhost:63342/Affordable%20Pest%20Control/assets/images/logo/Bitmap-profile.png",
                        title: "Buy Design Assets", start: new Date(l.now() + 338e6), end: new Date(l.now() + 4056e5), className: "bg-primary" },

                    { img:"http://localhost:63342/Affordable%20Pest%20Control/assets/images/logo/Bitmap-profile.png",
                        title: "Interview - FrontEnd Engineer",start: new Date(l.now() + 450e6), end: new Date(l.now() + 3056e5), className: "bg-warning" },

                    { img:"http://localhost:63342/Affordable%20Pest%20Control/assets/images/logo/Bitmap-profile.png",
                        title: "Interview - Backend Engineer", start: e, end: e, className: "bg-warning" },

                ],
                a = this;
            (a.$calendarObj = new FullCalendar.Calendar(a.$calendar[0], {
                slotMinTime: "08:00:00",
                slotMaxTime: "24:00:00",
                themeSystem: "bootstrap",
                bootstrapFontAwesome: !1,
                buttonText: { today: "Today", week: "Weekly", day: "Today", list: "List", prev: "<", next: ">" },
                initialView: "timeGridDay",
                handleWindowResize: !0,
                height: l(window).height() - 200,
                headerToolbar: { left: "prev,next", center: "title", right: "timeGridWeek,timeGridDay" },
                initialEvents: t,
                editable: !0,
                droppable: !0,
                selectable: !0,
                eventContent(arg) {
                // IMAGE ACCESS  = arg.event.extendedProps.img

                    let italicEl = document.createElement('div')
                    italicEl.innerHTML = `

                        <div class="card">
                          <div class="card-header">Heavy Subfloor Dusting</div>
                          <div class="card-body">
                            <h3 class="card-title">Culbura Beach NSW 2540</h3>
                            <p class="card-text">$250.00</p>
                          </div>
                          <div class="card-footer d-flex justify-content-between">
                           <img class="text-start" src="${arg.event.extendedProps.img}"/>
                           <span><b>Shane Konzen</b></span>
                            </div>
                        </div>
                    `
                    italicEl.classList.add("eventStyle");
                    let arrayOfDomNodes = [ italicEl ]
                    return { domNodes: arrayOfDomNodes }
                },

                dateClick: function (e) {
                    a.onSelect(e);
                },
                eventClick: function (e) {
                    a.onEventClick(e);
                },
            })),
                a.$calendarObj.render(),
                a.$btnNewEvent.on("click", function (e) {
                    a.onSelect({ date: new Date(), allDay: !0 });
                }),
                a.$formEvent.on("submit", function (e) {

                    e.preventDefault();
                    var t,
                        n = a.$formEvent[0];
                    n.checkValidity()
                        ? (a.$selectedEvent
                            ? (
                                a.$selectedEvent.setProp("title", l("#event-title").val()),

                                a.$selectedEvent.setProp("classNames", [l("#first_name").val()]))
                                : ((t = { title: l("#event-title").val(),
                                start: a.$newEventData.date, allDay:
                                a.$newEventData.allDay, className: l("#first_name").val() }),
                            //    { img:"http://localhost:63342/Affordable%20Pest%20Control/assets/images/logo/Bitmap-profile.png", title: "Meeting with Mr. Shreyu", start: new Date(l.now() + 158e6), end: new Date(l.now() + 338e6), className: "bg-warning" },
                                a.$calendarObj.addEvent(t)),


                        a.$modal.hide())
                        : (e.stopPropagation(), n.classList.add("was-validated"));
                }),
                l(
                    a.$btnDeleteEvent.on("click", function (e) {
                        a.$selectedEvent && (a.$selectedEvent.remove(), (a.$selectedEvent = null), a.$modal.hide());
                    })
                );
        }),
        (l.CalendarApp = new e()),
        (l.CalendarApp.Constructor = e);
})(window.jQuery),
    (function () {
        "use strict";
        window.jQuery.CalendarApp.init();
    })();
