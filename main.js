"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyChart = void 0;
const cdk8s_1 = require("cdk8s");
// imported constructs
const k8s_1 = require("./imports/k8s");
class MyChart extends cdk8s_1.Chart {
    constructor(scope, id, props = {}) {
        super(scope, id, props);
        const label = { app: 'hello-k8s' };
        new k8s_1.KubeService(this, 'service', {
            spec: {
                type: 'LoadBalancer',
                ports: [{ port: 80, targetPort: k8s_1.IntOrString.fromNumber(8080) }],
                selector: label
            }
        });
        new k8s_1.KubeDeployment(this, 'deployment', {
            spec: {
                replicas: 2,
                selector: {
                    matchLabels: label
                },
                template: {
                    metadata: { labels: label },
                    spec: {
                        containers: [
                            {
                                name: 'hello-kubernetes',
                                image: 'paulbouwer/hello-kubernetes:1.7',
                                ports: [{ containerPort: 8080 }]
                            }
                        ]
                    }
                }
            }
        });
    }
}
exports.MyChart = MyChart;
const app = new cdk8s_1.App();
new MyChart(app, 'hello');
app.synth();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EsaUNBQStDO0FBRS9DLHNCQUFzQjtBQUN0Qix1Q0FBeUU7QUFFekUsTUFBYSxPQUFRLFNBQVEsYUFBSztJQUNoQyxZQUFZLEtBQWdCLEVBQUUsRUFBVSxFQUFFLFFBQW9CLEVBQUc7UUFFL0QsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFFeEIsTUFBTSxLQUFLLEdBQUcsRUFBRSxHQUFHLEVBQUUsV0FBVyxFQUFFLENBQUM7UUFFbkMsSUFBSSxpQkFBVyxDQUFDLElBQUksRUFBRSxTQUFTLEVBQUU7WUFDL0IsSUFBSSxFQUFFO2dCQUNKLElBQUksRUFBRSxjQUFjO2dCQUNwQixLQUFLLEVBQUUsQ0FBRSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLGlCQUFXLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUU7Z0JBQ2pFLFFBQVEsRUFBRSxLQUFLO2FBQ2hCO1NBQ0YsQ0FBQyxDQUFDO1FBRUgsSUFBSSxvQkFBYyxDQUFDLElBQUksRUFBRSxZQUFZLEVBQUU7WUFDckMsSUFBSSxFQUFFO2dCQUNKLFFBQVEsRUFBRSxDQUFDO2dCQUNYLFFBQVEsRUFBRTtvQkFDUixXQUFXLEVBQUUsS0FBSztpQkFDbkI7Z0JBQ0QsUUFBUSxFQUFFO29CQUNSLFFBQVEsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7b0JBQzNCLElBQUksRUFBRTt3QkFDSixVQUFVLEVBQUU7NEJBQ1Y7Z0NBQ0UsSUFBSSxFQUFFLGtCQUFrQjtnQ0FDeEIsS0FBSyxFQUFFLGlDQUFpQztnQ0FDeEMsS0FBSyxFQUFFLENBQUUsRUFBRSxhQUFhLEVBQUUsSUFBSSxFQUFFLENBQUU7NkJBQ25DO3lCQUNGO3FCQUNGO2lCQUNGO2FBQ0Y7U0FDRixDQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0Y7QUFwQ0QsMEJBb0NDO0FBRUQsTUFBTSxHQUFHLEdBQUcsSUFBSSxXQUFHLEVBQUUsQ0FBQztBQUN0QixJQUFJLE9BQU8sQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDMUIsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnY29uc3RydWN0cyc7XG5pbXBvcnQgeyBBcHAsIENoYXJ0LCBDaGFydFByb3BzIH0gZnJvbSAnY2RrOHMnO1xuXG4vLyBpbXBvcnRlZCBjb25zdHJ1Y3RzXG5pbXBvcnQgeyBLdWJlRGVwbG95bWVudCwgS3ViZVNlcnZpY2UsIEludE9yU3RyaW5nIH0gZnJvbSAnLi9pbXBvcnRzL2s4cyc7XG5cbmV4cG9ydCBjbGFzcyBNeUNoYXJ0IGV4dGVuZHMgQ2hhcnQge1xuICBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogQ2hhcnRQcm9wcyA9IHsgfSkgXG4gIHtcbiAgICBzdXBlcihzY29wZSwgaWQsIHByb3BzKTtcblxuICAgIGNvbnN0IGxhYmVsID0geyBhcHA6ICdoZWxsby1rOHMnIH07XG5cbiAgICBuZXcgS3ViZVNlcnZpY2UodGhpcywgJ3NlcnZpY2UnLCB7XG4gICAgICBzcGVjOiB7XG4gICAgICAgIHR5cGU6ICdMb2FkQmFsYW5jZXInLFxuICAgICAgICBwb3J0czogWyB7IHBvcnQ6IDgwLCB0YXJnZXRQb3J0OiBJbnRPclN0cmluZy5mcm9tTnVtYmVyKDgwODApIH0gXSxcbiAgICAgICAgc2VsZWN0b3I6IGxhYmVsXG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBuZXcgS3ViZURlcGxveW1lbnQodGhpcywgJ2RlcGxveW1lbnQnLCB7XG4gICAgICBzcGVjOiB7XG4gICAgICAgIHJlcGxpY2FzOiAyLFxuICAgICAgICBzZWxlY3Rvcjoge1xuICAgICAgICAgIG1hdGNoTGFiZWxzOiBsYWJlbFxuICAgICAgICB9LFxuICAgICAgICB0ZW1wbGF0ZToge1xuICAgICAgICAgIG1ldGFkYXRhOiB7IGxhYmVsczogbGFiZWwgfSxcbiAgICAgICAgICBzcGVjOiB7XG4gICAgICAgICAgICBjb250YWluZXJzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnaGVsbG8ta3ViZXJuZXRlcycsXG4gICAgICAgICAgICAgICAgaW1hZ2U6ICdwYXVsYm91d2VyL2hlbGxvLWt1YmVybmV0ZXM6MS43JyxcbiAgICAgICAgICAgICAgICBwb3J0czogWyB7IGNvbnRhaW5lclBvcnQ6IDgwODAgfSBdXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuXG5jb25zdCBhcHAgPSBuZXcgQXBwKCk7XG5uZXcgTXlDaGFydChhcHAsICdoZWxsbycpO1xuYXBwLnN5bnRoKCk7Il19